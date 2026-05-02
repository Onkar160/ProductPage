/*
This component does not accepts any props.
Use case:- 
<Offer />
*/

export default function Offer() {
  return (
    <div className="bg-yellow-300 py-4 overflow-hidden">
      <div className="flex items-center group">
        <div className="animate-slide min-w-max group-hover:[animation-play-state:paused]">
          <span className="mr-8">GET 5% OFF BY USING COUPON : HEALTHY5</span>
          <span className="mr-8">•</span>
        </div>
        <div className="animate-slide min-w-max group-hover:[animation-play-state:paused]">
          <span className="mr-8">GET 5% OFF BY USING COUPON : HEALTHY5</span>
          <span className="mr-8">•</span>
        </div>
        <div className="animate-slide min-w-max group-hover:[animation-play-state:paused]">
          <span className="mr-8">GET 5% OFF BY USING COUPON : HEALTHY5</span>
          <span className="mr-8">•</span>
        </div>
        <div className="animate-slide min-w-max group-hover:[animation-play-state:paused]">
          <span className="mr-8">GET 5% OFF BY USING COUPON : HEALTHY5</span>
          <span className="mr-8">•</span>
        </div>
      </div>
    </div>
  );
}
