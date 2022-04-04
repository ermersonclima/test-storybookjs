import { ReactElement, useState } from "react";
import { Chip01 } from '../styled-components/chips'

interface HomeChipProps {
    color?: string
}

const HomeChip = ({color}: HomeChipProps): ReactElement => {
    const [text, setText] = useState<string>('HOME PAGE')

    const toLowerCase = () => {
        setText(text.toLowerCase())
    }
    const toUpperCase = () => {
        setText(text.toUpperCase())
    }

    return (
        <Chip01 color={color} onClick={toLowerCase} onDoubleClick={toUpperCase}>{text}</Chip01>
    )
}

export default HomeChip