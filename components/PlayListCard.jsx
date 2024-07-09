'use client';
import { getRandomElementFromArray } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FiPlay } from 'react-icons/fi';
import { MdMoreVert } from 'react-icons/md';
import IconButton from './elements/IconButton';

const PlayListCard = ({ playlist = {} } = {}) => {
  const { push } = useRouter();
  const { id, owner = '', playlistName = '', songList = [] } = playlist ?? {};

  const songListLen = songList?.length;
  const imageSrc = getRandomElementFromArray(songList)?.imageSrc;

  const onClickCard = () => {
    if (id) push(`playlist?list=${id}`);
  };

  const onClickPlay = () => {
    // TODO play
  };

  return (
    <article className="h-[240px] cursor-pointer group">
      <section onClick={onClickCard} className="relative h-[136px]">
        <Image
          src={
            imageSrc ||
            'https://images.unsplash.com/photo-1719465263924-eff2bd34fa6c?q=80&w=2350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          fill={true}
          alt="thimbnail"
          className="object-cover rounded-md"
        />
        <div className="hidden relative group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px]">
          <div className="absolute top-2 right-4">
            <IconButton icon={<MdMoreVert size={20} />} />
          </div>
          <div
            onClickPlay={onClickPlay}
            className="absolute bottom-4 right-4 flex items-center justify-center transform-gpu transition-transform hover:scale-110
          bg-[rgba(0,0,0,0.7)] w-[45px] h-[45px] rounded-full hover:bg-[rgba(0,0,0,0.9)]
          pl-[1.5px]
          "
          >
            <FiPlay size={22} color="red" />
          </div>
        </div>
      </section>
      <section className="mt-2">
        <div>{playlistName}</div>
        <div className="text-neutral-500">{`${owner} - 트랙 ${songListLen}개`}</div>
      </section>
    </article>
  );
};

export default PlayListCard;
