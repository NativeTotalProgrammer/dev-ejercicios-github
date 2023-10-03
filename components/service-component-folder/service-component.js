class RickMortyService {
  async fetchCharacter(id) {

    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch character data');
    };
    return response.json();
  };

};

export const rickMortyService = new RickMortyService();
