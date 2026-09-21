import * as React from 'react'
import {useComputedColorScheme, rem} from '@mantine/core'


type Props = {
    src: string;
    darkSrc?: string;
    height: string | number;
    alt?: string;
}

export default function LogoView({src, darkSrc, height, alt}: Props): React.JSX.Element {
    const computedColorScheme = useComputedColorScheme('light', {
        getInitialValueInEffect: true,
    })

    return (
        <img src={computedColorScheme === 'dark' && darkSrc ? darkSrc : src} alt={alt}
             style={{height: rem(height), width: 'auto'}}/>
    )
}
