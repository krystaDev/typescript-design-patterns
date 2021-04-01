import {ParcelRepo} from "./parcel-repo";
import {Notification} from "./notification";
import {Email} from "./email";
import {LabelGenerator} from "./label";

export class NewPackageFacade {
  private parcelRepo = new ParcelRepo();
  private notification = new Notification();
  private email = new Email();
  private label = new LabelGenerator();

  createPackage() {
    this.parcelRepo.createParcel();
    this.label.createLabelForSender();
    this.notification.sendNotificationToMobileDeviceToReceiver();
    this.email.sendEmailToReceiver();
    this.email.sendEmailToSender();
  }
}
