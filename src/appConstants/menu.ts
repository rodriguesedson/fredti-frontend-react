export type MenuItemType = {
    key: string;
    label: string;
    isTitle?: boolean;
    icon?: string;
    url?: string;
    badge?: {
        variant: string;
        text: string;
    };
    parentKey?: string;
    target?: string;
    children?: MenuItemType[];
};

const MENU_ITEMS: MenuItemType[] = [
    {
        key: 'comunicacao', 
        label: 'Comunicação', 
        isTitle: false,
        children: [
            {
                key: 'com-mural',
                label: 'Mural',
                url: 'apps/ecommerce/cadastro',
                parentKey: 'comunicacao'
            },
            {
                key: 'com-contatos',
                label: 'Contatos',
                url: 'apps/ecommerce/cadastro',
                parentKey: 'comunicacao'
            }
        ]
    },
    {
        key: 'seguranca', 
        label: 'Segurança', 
        isTitle: false,
        children: [
            {
                key: 'seg-CFTV',
                label: 'CFTV',
                url: 'apps/ecommerce/cadastro',
                parentKey: 'seguranca'
            },
            {
                key: 'seg-portaria',
                label: 'Portaria',
                url: 'apps/ecommerce/cadastro',
                parentKey: 'seguranca'
            }
        ]
    },
    {
        key: 'agendamentos', 
        label: 'Agendamentos', 
        isTitle: false,
        children: [
            {
                key: 'ag-Salas',
                label: 'Salas',
                url: 'apps/ecommerce/cadastro',
                parentKey: 'agendamentos'
            },
            {
                key: 'ag-veiculos',
                label: 'Veículos',
                url: 'apps/ecommerce/cadastro',
                parentKey: 'agendamentos'
            }
        ]
    },
    {
        key: 'documentos', 
        label: 'Documentos', 
        isTitle: false,
        children: [
            {
                key: 'doc-politicas-rh',
                label: 'Políticas RH',
                url: 'apps/ecommerce/cadastro',
                parentKey: 'documentos'
            },
        ]
    },
    {
        key: 'processos', 
        label: 'Processos', 
        isTitle: false,
        children: [
            {
                key: 'pro-its',
                label: 'ITs',
                url: 'apps/ecommerce/cadastro',
                parentKey: 'processos'
            },
            {
                key: 'pro-workflow',
                label: 'Workflow',
                url: 'apps/ecommerce/cadastro',
                parentKey: 'processos'
            }
        ]
    },
    {
        key: 'dashboards', 
        label: 'Dashboards', 
        isTitle: false,
        children: [
            {
                key: 'das-kpi-vendas',
                label: 'KPIs Vendas',
                url: 'apps/ecommerce/cadastro',
                parentKey: 'dashboards'
            },
            {
                key: 'das-produtividade',
                label: 'Produtividade',
                url: 'apps/ecommerce/cadastro',
                parentKey: 'dashboards'
            }
        ]
    },
    {
        key: 'acessos', 
        label: 'Acessos', 
        isTitle: false,
        children: [
            {
                key: 'ac-erp',
                label: 'ERP',
                url: 'apps/ecommerce/cadastro',
                parentKey: 'acessos'
            },
            {
                key: 'ac-crm',
                label: 'CRM',
                url: 'apps/ecommerce/cadastro',
                parentKey: 'acessos'
            }
        ]
    },
];

export { MENU_ITEMS };
