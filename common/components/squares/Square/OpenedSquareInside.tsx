import { getMineAroudColor } from 'common/utils/game/getMineAroundColor'
import { MineIcon } from 'common/components/icons/MineIcon'

interface OpenedSquareInsideProps {
  mineAround: string | number
}

export const OpenedSquareInside = ({ mineAround }: OpenedSquareInsideProps) => (
  <span
    style={{
      width: '28px',
      fontFamily: 'none',
      lineHeight: '13px',
      color: getMineAroudColor(mineAround),
    }}
  >
    {mineAround === 'M' ? <MineIcon /> : mineAround}
  </span>
)

export default OpenedSquareInside
