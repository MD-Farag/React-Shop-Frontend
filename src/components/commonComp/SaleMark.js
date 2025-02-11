

const SaleMark = ({ position, left, top, save }) => {
    return (
        <div className={`${position} ${left} ${top} bg-[#FF0000] rounded-full w-[70px] text-center py-1 z-10 text-white`}>
            {save}%
        </div>
    )
}

export default SaleMark