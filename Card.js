const FaceValue = 
{
    ACE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    JACK: 11,
    QUEEN: 12,
    KING: 13
}
const Suit = 
{
    HEARTS: 1,
    DIAMONDS: 2,
    SPADES: 3,
    CLUBS: 4
}

class Card
{
    faceValue;
    suit;

    constructor(face, suit)
    {
        this.faceValue = face;
        this.suit = suit;
    }
    GetFaceValue() { return this.faceValue; }
    static GetMaxFaceValue() { return FaceValue.KING; }
    GetSuit() { return this.suit; }
    static GetMaxSuit() { return Suit.CLUBS; }
    GetCard() { return `${this.faceValue} of ${this.suit}`; }
}