# Generated by Django 3.2 on 2022-05-03 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0003_alter_userprofile_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='birthday',
        ),
        migrations.AddField(
            model_name='userprofile',
            name='birth_day',
            field=models.DateField(blank=True, null=True, verbose_name='Дата рождения'),
        ),
    ]
