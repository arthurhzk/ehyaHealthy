import pathTypes from '@/domain/types/pathTypes';

const paths: pathTypes[] = [
    {
        name: 'Home',
        pathName: '/'
    },
    {
        name: 'Produtos',
        pathName: '/products'
    },
    {
        name: 'Categoria',
        pathName: '/products/:category'
    },
    {
        name: 'Sobre',
        pathName: '/about'
    },
    {
        name: 'Contato',
        pathName: '/contact'
    },
    {
        name: 'Carrinho',
        pathName: '/cart'
    }
];
export default paths;
