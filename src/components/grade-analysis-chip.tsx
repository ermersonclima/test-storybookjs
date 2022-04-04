import { ReactElement } from "react";
import { Chip01 } from '../styled-components/chips'

interface GradeAnalysisChipProps {
    grade: number
    label?: string
}

const GradeAnalysisChip = (props: GradeAnalysisChipProps): ReactElement => {
    const { grade } = props
    const color = !isNaN(grade) ? grade >= 6 ? ('#0f0') : ('#f00') : ('#ff0')

    return (
        <Chip01 color={color}>{props?.label || 'Untitled'}</Chip01>
    )
}

export default GradeAnalysisChip