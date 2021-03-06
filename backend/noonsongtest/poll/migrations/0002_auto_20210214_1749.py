# Generated by Django 3.1.5 on 2021-02-14 08:49

from django.db import migrations, models
import django_mysql.models


class Migration(migrations.Migration):

    dependencies = [
        ('poll', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='answer_list',
            field=django_mysql.models.ListTextField(models.IntegerField(null=True), default=[], size=30),
        ),
        migrations.AlterField(
            model_name='user',
            name='result_id',
            field=models.IntegerField(null=True),
        ),
    ]
