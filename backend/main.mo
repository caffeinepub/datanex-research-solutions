import Array "mo:core/Array";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Migration "migration";

(with migration = Migration.run)
actor {
  public type ContactMessage = {
    name : Text;
    email : Text;
    company : ?Text;
    budget : Text;
    service : [Text];
    message : Text;
  };

  public type SubmitContactMessage = {
    name : Text;
    email : Text;
    company : ?Text;
    budget : Text;
    service : [Text];
    message : Text;
  };

  var messages : [ContactMessage] = [];

  func validateMessage(message : SubmitContactMessage) : Bool {
    if (message.name.size() == 0) {
      Runtime.trap("Name cannot be empty");
    };
    if (message.email.size() <= 5 or not message.email.endsWith(#text ".com")) {
      Runtime.trap("Invalid email. Format: example@domain.com");
    };
    if (message.service.size() == 0) {
      Runtime.trap("Empty service request");
    };
    if (message.message.size() == 0) {
      Runtime.trap("Empty message");
    };
    true;
  };

  public shared ({ caller }) func submitContactMessage(newMessage : SubmitContactMessage) : async () {
    if (validateMessage(newMessage)) {
      messages := messages.concat([newMessage]);
    };
  };

  public query ({ caller }) func getMessages() : async [ContactMessage] {
    messages;
  };
};
