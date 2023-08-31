from time import sleep
from celery import shared_task
# from .utils.mail_handlers import sendmail


@shared_task
def send_welcome_email(message):
    print("10k Emails...")
    print(message)
    # sendmail(message)
    sleep(10)
    print("Emails sent successfully!")


@shared_task
def periodic_task():
    print("Starting Periodic Task")
    sleep(3)
    print("Periodic Task Completed Successfully")
