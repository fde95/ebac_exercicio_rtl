import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Adiciona dois comentários', () =>{
        render(<PostComment/>);

    fireEvent.change(screen.getByTestId('textarea'), {
        target: {
            value: 'Comentário 1 adicionado',
        }
    });
    fireEvent.click(screen.getByTestId('button'));

    fireEvent.change(screen.getByTestId('textarea'), {
        target: {
            value: 'Comentário 2 adicionado',
        }
    });
    fireEvent.click(screen.getByTestId('button'));


    expect(screen.getAllByTestId('comments')).toHaveLength(2);
});
});