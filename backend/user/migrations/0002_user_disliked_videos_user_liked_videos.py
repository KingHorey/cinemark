# Generated by Django 5.1.3 on 2024-11-27 15:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0004_remove_episode_rating_remove_movie_rating_and_more'),
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='disliked_videos',
            field=models.ManyToManyField(related_name='my_disliked_videos', to='movie.movie'),
        ),
        migrations.AddField(
            model_name='user',
            name='liked_videos',
            field=models.ManyToManyField(related_name='my_liked_movies', to='movie.movie'),
        ),
    ]
