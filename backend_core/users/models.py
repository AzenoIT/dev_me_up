from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _


class CustomUser(AbstractUser):
    email = models.EmailField(_("email address"), unique=True)
    username = models.CharField(_("username"),
                                max_length=100,
                                unique=False,
                                help_text=_(
                                    "Required. 100 characters or fewer."
                                ), )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ["email address"]

    def __str__(self):
        return self.email


class UserFriend(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='user')
    friend = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, related_name='friend')

    approved = models.BooleanField(default=False)
    def __str__(self):
        return f'{self.user} has {self.friend} as a friend'
