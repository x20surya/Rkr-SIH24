export default function UserReviewCard({ name, date, rating, review }) {
    return (
      <div className="flex flex-col items-start justify-start w-full mt-3 p-5 bg rounded-lg shadow-lg">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-[#873a6d] rounded-full">
              <span className="text-xl font-bold">{name.charAt(0)}</span>
            </div>
            <div className="flex flex-col ml-4">
              <span className="text-lg font-bold">{name}</span>
              <span className="text-sm ">{date}</span>
            </div>
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-[#e89a00]"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.392-2.46a1 1 0 00-1.176 0l-3.392 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.245 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
            </svg>
            <span className="ml-2 text-lg font-bold">{rating}</span>
          </div>
        </div>
        <p className="mt-4 text-lg">{review}</p>
      </div>
    );
  }