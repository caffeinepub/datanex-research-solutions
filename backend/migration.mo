module {
  public type ContactMessage = {
    name : Text;
    email : Text;
    company : ?Text;
    budget : Text;
    service : [Text];
    message : Text;
  };

  public func run(_ : {}) : { messages : [ContactMessage] } {
    { messages = [] };
  };
};
