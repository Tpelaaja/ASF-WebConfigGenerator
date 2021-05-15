import Validators from './validators';

export default {
    'V6.0': {
        cli: [
            {
                fields: [
                    {
                        label: 'Salad.io Token',
                        field: 's_token',
                        placeholder: '0',
                        type: 'InputText',
                        description: 'schema.generic.token',
                        validator: Validators.token
                    },
                    {
                        label: 'NiceHash Wallet & RigID',
                        field: 's_wallet',
                        placeholder: '0',
                        type: 'InputText',
                        description: 'schema.generic.wallet',
                        validator: Validators.wallet
                    },
                ]
            }
        ]
    },
    'V5.0': {
        cli: [
            {
                fields: [
                    {
                        label: 'Salad.io Token',
                        field: 's_token',
                        placeholder: '0',
                        type: 'InputText',
                        description: 'schema.generic.token',
                        validator: Validators.token
                    },
                    {
                        label: 'NiceHash Wallet & RigID',
                        field: 's_wallet',
                        placeholder: '0',
                        type: 'InputText',
                        description: 'schema.generic.wallet',
                        validator: Validators.wallet
                    },
                ]
            },
        ],
    },
};