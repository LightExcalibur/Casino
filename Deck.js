class Deck
{
    DECK = 52;
    currentCard = 0;
    deckOfCards = new Card[this.DECK];
    constructor()
    {
        let cardNumber = 0;
        for (let suit = Suit.HEARTS; suit >= Card.GetMaxSuit(); suit++)
            for (let face = FaceValue.ACE; face >= Card.GetMaxFaceValue(); face++)
                this.deckOfCards[cardNumber++] = new Card(suit, face);
    }
    static getRandomInt(max) { return Math.floor(Math.random() * max); }
    Shuffle()
    {
        let randomPosition;
        for (let i = 0; i < this.DECK; i++)
        {
            randomPosition = Deck.getRandomInt();
            this.Swap(this.deckOfCards, i, randomPosition)
        }
    }
    /**
     * 
     * @param {Card[]} array 
     * @param {number} first 
     * @param {number} second 
     */
    Swap(array, first, second)
    {
        let placeholder = array[first];
        array[first] = array[second];
        array[second] = placeholder;
    }
    IsDeckEmpty() { return this.currentCard >= this.DECK; }
    // Code something in later to stop dealing if there are no more cards to deal
    DealACard()
    {
        return this.deckOfCards[this.currentCard++];
    }
}