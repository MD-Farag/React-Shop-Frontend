

const RateBar = () => {
    const stars = [1, 2, 3, 4, 5];
    const numOfUsers = [15, 25, 21, 30, 9];
    const actValues = [15, 25, 21, 30, 9];
    const maxValue = 100;

    return (
        <div className="flex flex-col w-full gap-4">
            {stars.map((star, indx) => (
                <span className="flex items-center w-full gap-2" key={star}>
                    <label id="p03e-label" htmlFor="p03e" className="mb-0 text-xs text-center w-9 shrink-0 text-slate-500">
                        {star} star
                    </label>
                    <progress aria-labelledby="p03e-label" id="p03e" max={maxValue} value={actValues[indx]} className="block h-[5px] w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-400 [&::-moz-progress-bar]:bg-amber-400"></progress>
                    <span className="text-xs font-bold w-9 text-slate-700">{numOfUsers[indx]}</span>
                </span>
            ))}
        </div>
    )
}

export default RateBar