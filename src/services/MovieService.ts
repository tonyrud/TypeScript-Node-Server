import * as Koa from 'koa';
import { getRepository, Repository } from 'typeorm';
import movieEntity from '../models/movie.entity';
import { eventEmitter } from '../subscribers/emitter';

export default class MovieService {
    public static async getMovies(): Promise<{ movies: movieEntity[] }> {
        const movieRepo: Repository<movieEntity> = getRepository(movieEntity);

        const movies = await movieRepo.find();

        eventEmitter.emit('email', {
            movie: { name: movies[0].name },
        });

        return { movies };
    }

    public static async getMovie(
        ctx: Koa.Context,
        id: string
    ): Promise<{ movie: movieEntity }> {
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
}
