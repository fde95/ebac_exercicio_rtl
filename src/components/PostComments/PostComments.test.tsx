import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>)
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    test('Deve adicionar dois comentários', () => {
        render(<PostComment />);

        // Adiciona o primeiro comentário
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Comentário adicionado via testes',
            }
        });
        fireEvent.click(screen.getByTestId('btn-postar'));

        // Adiciona o segundo comentário
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Segundo comentário adicionado via testes',
            }
        });
        fireEvent.click(screen.getByTestId('btn-postar'));

    });
})