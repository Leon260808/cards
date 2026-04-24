export enum Colors {
    Rosen,
    Schellen,
    Schilten,
    Eicheln,
}

export enum Values {
    Sechs,
    Sieben,
    Acht,
    Neun,
    Banner,
    Under,
    Ober,
    König,
    Ass,
}

export class Card {
    constructor(readonly color: Colors, readonly value: Values) {}

    beats(other: Card): boolean {
        if (this.value !== other.value) {
            return this.value > other.value;
        }
        return (this.color === Colors.Rosen && other.color === Colors.Schellen) ||
               (this.color === Colors.Schilten && other.color === Colors.Eicheln);
    }
}
