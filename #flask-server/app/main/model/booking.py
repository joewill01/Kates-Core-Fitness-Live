from .. import db


class Booking(db.Model):
    """ Booking Model for storing bookings """
    __tablename__ = "booking"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    public_id = db.Column(db.String(100), unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    class_id = db.Column(db.Integer, db.ForeignKey("classes.id"), nullable=False)

    def __repr__(self):
        return "<Booking '{}'>".format(self.public_id)
