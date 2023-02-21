from django.db import models


class DeviceInformation(models.Model):
    device_information = models.CharField(max_length=100)


class Application(models.Model):
    device_information = models.ForeignKey('DeviceInformation', on_delete=models.DO_NOTHING, related_name='%(class)s')

    device_identity = models.CharField(max_length=50, unique=True)
    creation_date = models.DateTimeField()
    players = models.ManyToManyField('players.Player', related_name='%(class)s')
    accounts = models.ManyToManyField('users.CustomUser', related_name='%(class)s')

    def __str__(self):
        return self.device_identity
