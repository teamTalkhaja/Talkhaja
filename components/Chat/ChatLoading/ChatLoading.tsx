import Image from 'next/image';
import React from 'react';
import styles from './ChatLoading.module.scss';

export default function ChatLoading() {
  return (
    <div className={styles.container}>
      <h3>채팅방을 불러오는 중입니다..</h3>
      <Image
        width={70}
        height={70}
        src="/images/Spin-1s-200px.gif"
        alt="loading"
      />
    </div>
  );
}
