import React from 'react';

export default function CarCardSkeleton(): JSX.Element {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
      <div className="flex flex-col lg:flex-row">
        {/* Image Skeleton */}
        <div className="lg:w-60 xl:w-64 h-40 sm:h-44 lg:h-40 bg-gray-200 flex-shrink-0" />

        {/* Details Skeleton */}
        <div className="flex-1 p-3 sm:p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-200 rounded w-1/2" />
            </div>
          </div>

          {/* Specifications Grid Skeleton */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-2 mb-2">
            {[...Array(6)].map((_, i) => (
              <div key={i}>
                <div className="h-2 bg-gray-200 rounded w-16 mb-1" />
                <div className="h-3 bg-gray-200 rounded w-20" />
              </div>
            ))}
          </div>

          {/* Badges Skeleton */}
          <div className="flex items-center gap-1.5 mb-2">
            <div className="h-5 bg-gray-200 rounded-full w-20" />
            <div className="h-5 bg-gray-200 rounded-full w-16" />
          </div>

          {/* Rating Skeleton */}
          <div className="flex items-center gap-2">
            <div className="h-3 bg-gray-200 rounded w-24" />
            <div className="h-3 bg-gray-200 rounded w-16" />
          </div>
        </div>

        {/* Price & Actions Skeleton */}
        <div className="border-t lg:border-t-0 lg:border-l border-gray-200 p-3 sm:p-4 lg:w-48 xl:w-52 flex flex-col justify-between">
          <div>
            <div className="text-center lg:text-right mb-3">
              <div className="h-6 bg-gray-200 rounded w-24 mx-auto lg:ml-auto lg:mr-0 mb-1" />
              <div className="h-2 bg-gray-200 rounded w-16 mx-auto lg:ml-auto lg:mr-0" />
            </div>
          </div>

          {/* Action Buttons Skeleton */}
          <div className="flex gap-2">
            <div className="flex-1 h-9 bg-gray-200 rounded-lg" />
            <div className="flex-1 h-9 bg-gray-200 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
