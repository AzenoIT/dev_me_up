import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv('user_engagement.csv', parse_dates=['date'])

# remove rows with missing user IDs or dates
data.dropna(subset=['user_id', 'date'], inplace=True)
data.drop_duplicates(inplace=True)

# calculate daily, weekly, monthly user activity
daily_active_user = data.groupby('date')['user_id'].nunique()
weekly_active_user = data.groupby(pd.Grouper(key='date', freq='W-MON'))['user_id'].nunique()
monthly_active_user = data.groupby(pd.Grouper(key='date', freq='M'))['user_id'].nunique()

# calculate retention rates, user returns
retention = []
for i in range(1, 31):
    # Filter the data to only include users who had their first session on a particular day
    first_session = data.groupby('user_id')['date'].min().reset_index()
    first_session = first_session[first_session['date'] == first_session['date'].min() + pd.Timedelta(days=i)]
    # users who returned in subsequent days
    subsequent_sessions = data[data['user_id'].isin(first_session['user_id'])]
    subsequent_sessions = subsequent_sessions[
        subsequent_sessions['date'] >= first_session['date'].values[0] + pd.Timedelta(days=1)
        ]
    subsequent_sessions = subsequent_sessions['user_id'].nunique()
    # retention rate for that day
    retention_rate = subsequent_sessions / first_session['user_id'].nunique()
    retention.append(retention_rate)
