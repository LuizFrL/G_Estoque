# Generated by Django 3.2.7 on 2021-11-17 03:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('feedback', '0005_alter_feedbackmodel_type_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedbackmodel',
            name='type_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='feedback.feedbacktypemodel'),
        ),
    ]
