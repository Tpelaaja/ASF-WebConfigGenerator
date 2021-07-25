import Validators from './validators';

export default {
    'V10': {
        cli: [
            {
                fields: [
                    {
                        label: 'Your salad.io access token',
                        field: 'salad_key',
                        placeholder: '0',
                        type: 'InputText',
                        description: 'schema.auth',
                        validator: Validators.auth
                    },
                    {
                        label: 'Your salad.io refresh token',
                        field: 'sIdRefreshToken',
                        placeholder: 'abc-xyz',
                        type: 'InputText',
                        description: 'schema.auth',
                        validator: Validators.auth
                    },
                    {
                        label: 'Your Nicehash wallet & rigid',
                        field: 'nicehash_wallet',
                        placeholder: '3FSqW1MFAdzekG6DdvfUhPVnwVY4C9zBAG.ylpbzea9ddajcmp',
                        type: 'InputText',
                        description: 'schema.nicehash',
                        validator: Validators.wallet
                    },
                    {
                        label: 'Your Ethermine wallet & rigid',
                        field: 'ethermine_wallet',
                        placeholder: '0x6ff85749ffac2d3a36efa2bc916305433fa93731.ylpbzea9ddajcmp',
                        type: 'InputText',
                        description: 'schema.ethermine',
                        validator: Validators.wallet
                    },
                ]
            }
        ]
    },
    'V7, V8, V9 & V10 - Only Mining': {
        cli: [
            {
                fields: [
                    {
                        label: 'Your Nicehash wallet & rigid',
                        field: 'nicehash_wallet',
                        placeholder: '3FSqW1MFAdzekG6DdvfUhPVnwVY4C9zBAG.ylpbzea9ddajcmp',
                        type: 'InputText',
                        description: 'schema.nicehash',
                        validator: Validators.wallet
                    },
                    {
                        label: 'Your Ethermine wallet & rigid',
                        field: 'ethermine_wallet',
                        placeholder: '0x6ff85749ffac2d3a36efa2bc916305433fa93731.ylpbzea9ddajcmp',
                        type: 'InputText',
                        description: 'schema.ethermine',
                        validator: Validators.wallet
                    },
                ]
            }
        ]
    },
    'Deprecated!! V7, V8 & V9': {
        cli: [
            {
                fields: [
                    {
                        label: 'Your salad.io authenentication token',
                        field: 'salad_key',
                        placeholder: '0',
                        type: 'InputText',
                        description: 'schema.auth',
                        validator: Validators.auth
                    },
                    {
                        label: 'Your Nicehash wallet & rigid',
                        field: 'nicehash_wallet',
                        placeholder: '3FSqW1MFAdzekG6DdvfUhPVnwVY4C9zBAG.ylpbzea9ddajcmp',
                        type: 'InputText',
                        description: 'schema.nicehash',
                        validator: Validators.wallet
                    },
                    {
                        label: 'Your Ethermine wallet & rigid',
                        field: 'ethermine_wallet',
                        placeholder: '0x6ff85749ffac2d3a36efa2bc916305433fa93731.ylpbzea9ddajcmp',
                        type: 'InputText',
                        description: 'schema.ethermine',
                        validator: Validators.wallet
                    },
                ]
            }
        ]
    },
    'Deprecated!! V5/V6': {
        cli: [
            {
                fields: [
                    {
                        label: 'Your salad.io authenentication token',
                        field: 'salad_key',
                        placeholder: '0',
                        type: 'InputText',
                        description: 'schema.auth',
                        validator: Validators.auth
                    },
                    {
                        label: 'Your Nicehash wallet & rigid',
                        field: 'wallet',
                        placeholder: '3FSqW1MFAdzekG6DdvfUhPVnwVY4C9zBAG.ylpbzea9ddajcmp',
                        type: 'InputText',
                        description: 'schema.nicehash',
                        validator: Validators.wallet
                    },
                ]
            }
        ]
    }
}