# Generated by Django 3.1.5 on 2021-02-14 17:27

from django.db import migrations, models
import django_mysql.models


class Migration(migrations.Migration):

    dependencies = [
        ('poll', '0005_user_ip'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='answer_list',
            field=django_mysql.models.ListCharField(models.CharField(max_length=10), default=[], max_length=66, size=6),
        ),
    ]
