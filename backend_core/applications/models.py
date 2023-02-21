from django.db import models

class DeviceInformation(models.Model):
    device_dictionary = models.CharField(max_length=100)


class Applications(models.Model):
    device_dictionary = models.ForeignKey('DeviceDictionary', on_delete=models.DO_NOTHING, related_name='%(class)s')

    device_identity = models.CharField(max_length=50, unique=True)
    creation_date = models.TextField()
    technologies = models.ManyToManyField('technologies.Technologies', related_name='applications')
    players = models.ManyToManyField('players.Players', related_name='applications')

    def __str__(self):
        return self.name
