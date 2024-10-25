'use client'

import { redirect } from 'next/navigation'
import styles from './page.module.css'

export default function Home() {
  if (typeof window !== 'undefined') {
    const userAgent = navigator.userAgent

    if (/android/i.test(userAgent)) {
      redirect(
        'https://play.google.com/store/apps/details?id=com.breeze.dental.app'
      )
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      redirect('https://apps.apple.com/mx/app/breeze-oral-care/id6479655092')
    } else {
      redirect('https://breezeoralcare.com/')
    }
  }

  return <div className={styles.page}>Redirecting</div>
}
