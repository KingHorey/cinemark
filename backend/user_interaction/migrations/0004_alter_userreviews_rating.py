# Generated by Django 5.1.3 on 2024-12-03 02:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_interaction', '0003_userreviews'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userreviews',
            name='rating',
            field=models.DecimalField(decimal_places=1, max_digits=2),
        ),
    ]
