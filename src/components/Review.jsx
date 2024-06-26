import { StarIcon } from "@heroicons/react/20/solid"

const Review = ({review, name, title}) => {
  return (
    <div className="mx-auto max-w-2xl mb-10 sm:mb-0">
      <div className="flex gap-x-1 text-yellow-500">
        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
        <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
      </div>
      <div className="mt-10 text-xl font-semibold leading-8 tracking-tight sm:text-2xl sm:leading-9">
        <p>
          “{review}”
        </p>
      </div>
      <div className="mt-10 flex items-center gap-x-6">
        <img
          className="h-12 w-12 rounded-full bg-gray-50"
          src="https://placehold.co/100x100"
          alt=""
        />
        <div className="text-sm leading-6">
          <div className="font-semibold">{name}</div>
          <div className="mt-0.5">{title}</div>
        </div>
      </div>
    </div>
  )
}

export default Review