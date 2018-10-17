import { MovieInterface } from './movie';

export interface ReminderInterface {
    id?: number,
    title: string,
    movie: MovieInterface,
    locale: string,
    notes: string,
    date: Date,
    total_price: number,
}
