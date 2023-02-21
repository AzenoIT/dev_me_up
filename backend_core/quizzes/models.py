from django.db import models

class Quiz(models.Model):
    start_date = models.DateTimeField(auto_now_add=True)
    duration_minutes = models.PositiveIntegerField()
    end_status = models.BooleanField(default=False)

    def __str__(self):
        return f'Quiz: {self.pk}, started at {self.start_date}.'
