import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('great')

  const userAgent = request.headers.get('user-agent') || ''

  const appStoreUrl =
    'https://apps.apple.com/mx/app/breeze-oral-care/id6479655092'
  const playStoreUrl =
    'https://play.google.com/store/apps/details?id=com.breeze.dental.app'
  const websiteUrl = 'https://breezeoralcare.com/'

  // Redirect based on device type
  if (/android/i.test(userAgent)) {
    return NextResponse.redirect(playStoreUrl)
  }

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return NextResponse.redirect(appStoreUrl)
  }

  return NextResponse.redirect(websiteUrl)
}

export const config = {
  matcher: '/',
}
