class AnimalRequests {
    constructor() {
        this.serverUrl = 'http://localhost:3000';
        this.routeListarAnimal = '/listar-aves';
        this.routeCadastrarAnimal = '/novo/ave';
        this.routeDeletarAnimal = '/remover/animal';
        this.routeAlterarAnimal = '/atualizar/animal';
    }

    async ListarAnimais() {
        try {
            const response = await fetch(`${this.serverUrl}${this.routeListarAnimal}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar servidor');
            }
            return await response.json();
        } catch (error) {
            console.error('Erro: ', error);
            return null;
        }
    }

        async deletarAnimal(idAnimal) {
            try {
                const response = await fetch(`${this.serverUrl}${this.routeDeletarAnimal}?idAnimal=${idAnimal}`, {
                    method: 'DELETE'
                });
                if (!response.ok) {
                    throw new Error('Erro ao enviar formulário');
                }
                return true;
            } catch (error) {
                console.error('Erro: ', error);
                window.alert('Erro ao deletar animal');
                return null;
            }
        }
}
export default new AnimalRequests