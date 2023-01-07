import { TestBed } from '@angular/core/testing';

import { SearchPokemonService } from './search-pokemon.service';

describe('SearchPokemonService', () => {
  let service: SearchPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
