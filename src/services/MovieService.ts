import * as Koa from 'koa';
import { getRepository, Repository } from 'typeorm';
import movieEntity from '../models/movie.entity';
import { eventEmitter } from '../subscribers/emitter';

export default class MovieService {
    public static async getMovies(): Promise<{ movies: movieEntity[] }> {
        const movieRepo: Repository<movieEntity> = getRepository(movieEntity);

        const movies = await movieRepo.find();

        eventEmitter.emit('email', {
            movieNames: movies.map(item => item.name),
        });

        return { movies };
    }

    public static async getMovie(id: string): Promise<{ movie: movieEntity }> {
        const movieRepo: Repository<movieEntity> = getRepository(movieEntity);

        let movie;

        try {
            movie = await movieRepo.findOne(id);
        } catch (error) {
            console.log('error getting movie');
            return;
        }

        return { movie };
    }

    public static async createMovie(
        body: movieEntity
    ): Promise<{ movie: movieEntity }> {
        const movieRepo: Repository<movieEntity> = getRepository(movieEntity);

        const movie: movieEntity = movieRepo.create(body);

        try {
            // Persist it to the database.
            await movieRepo.save(movie);
        } catch (error) {
            console.log('error saving movie');
            return;
        }

        return { movie };
    }

    public static async deleteMovie(
        movieId: string
    ): Promise<{ movie: movieEntity }> {
        const movieRepo: Repository<movieEntity> = getRepository(movieEntity);

        let movie;

        try {
            movie = await movieRepo.findOne(movieId);
            await movieRepo.delete(movie);
        } catch (error) {
            console.log('error deleting movie');
            return;
        }

        return { movie };
    }

    public static async updateMovie(
        movieId: string,
        body: movieEntity
    ): Promise<{ movie: movieEntity }> {
        const movieRepo: Repository<movieEntity> = getRepository(movieEntity);

        let movie;

        try {
            movie = await movieRepo.findOne(movieId);

            // Merge the existing movie with the new data.
            // This allows for really simple partial (PATCH).
            const updatedMovie = await movieRepo.merge(movie, body);

            // Save the new data.
            movieRepo.save(updatedMovie);
        } catch (error) {
            console.log('error updating movie');
            return;
        }

        return { movie };
    }
}
