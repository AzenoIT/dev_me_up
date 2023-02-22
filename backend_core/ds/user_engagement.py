import pandas as pd
import matplotlib.pyplot as plt

# TODO in the future will probably need to be rebuilt  according to the data
data = pd.read_csv('user_engagement.csv', parse_dates=['date'])

data.dropna(subset=['user_id', 'date'], inplace=True)
data.drop_duplicates(inplace=True)

daily_active_user = data.groupby('date')['user_id'].nunique()
weekly_active_user = data.groupby(pd.Grouper(key='date', freq='W-MON'))['user_id'].nunique()
monthly_active_user = data.groupby(pd.Grouper(key='date', freq='M'))['user_id'].nunique()

retention = []
for i in range(1, 31):
    first_session = data.groupby('user_id')['date'].min().reset_index()
    first_session = first_session[first_session['date'] == first_session['date'].min() + pd.Timedelta(days=i)]
    subsequent_sessions = data[data['user_id'].isin(first_session['user_id'])]
    subsequent_sessions = subsequent_sessions[
        subsequent_sessions['date'] >= first_session['date'].values[0] + pd.Timedelta(days=1)
        ]
    subsequent_sessions = subsequent_sessions['user_id'].nunique()
    retention_rate = subsequent_sessions / first_session['user_id'].nunique()
    retention.append(retention_rate)

fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(8, 10))
ax1.plot(daily_active_user, label='daily_active_user')
ax1.plot(weekly_active_user, label='weekly_active_user')
ax1.plot(monthly_active_user, label='monthly_active_user')
ax1.plot()
ax1.set_xlabel('Date')
ax1.set_ylabel('Active Users')
ax2.plot(range(1, 31), retention)
ax2.set_xlabel('Days Since First Session')
ax2.set_ylabel('Retention Rate')
plt.show()
