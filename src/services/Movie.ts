import { getRepository, Repository } from 'typeorm';
import movieEntity from './../models/movie.entity';
import { eventEmitter } from '../subscribers/emitter';

export default class MovieService {
    public static async getMovies() {
        const movieRepo: Repository<movieEntity> = getRepository(movieEntity);

        const movies = await movieRepo.find();

        eventEmitter.emit('email', {
            movie: { name: movies[0].name },
        });

        return { movies };
    }
}
