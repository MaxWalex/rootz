import './footer.scss';

function Footer() {
  return (
    <footer>
        <div className="container_footer">
            <div className="footer_inner">
                <div className="footer_contacts footer_item">
                    <h3 className=''>Contacts</h3>
                    <p>2019 Rootz Foundation. All rights reserved</p>
                </div>

                <div className="footer_side footer_item">
                    <h4 className='footer_title'>Headquarters</h4>
                    <ul>
                        <li>1234 Taliban</li>
                        <li>Los Angeles, La 1234567</li>
                        <li>(123) 456-7890</li>
                    </ul>
                </div>

                <div className="footer_socials footer_item">
                    <h4 className='footer_title'>Social media</h4>
                    <ul>
                        <li>
                            <a href="#" target="_blank">
                                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.2532 3.66003C16.2626 3.80236 16.2626 3.95075 16.2626 4.09611C16.2626 8.54178 12.756 13.6628 6.34801 13.6628C4.37199 13.6628 2.54025 13.1086 0.99707 12.1546C1.27936 12.1849 1.5491 12.197 1.83766 12.197C3.46866 12.197 4.96793 11.664 6.16295 10.7616C4.63232 10.7313 3.34634 9.76222 2.90722 8.42973C3.44357 8.50544 3.9266 8.50544 4.47863 8.36916C3.6905 8.21456 2.98211 7.80129 2.4738 7.19955C1.9655 6.59781 1.68864 5.84472 1.69025 5.06822V5.02583C2.15132 5.27718 2.69394 5.43163 3.26165 5.45283C2.7844 5.14573 2.39301 4.72968 2.12218 4.24157C1.85135 3.75345 1.70945 3.20835 1.70907 2.6546C1.70907 2.02773 1.87844 1.45536 2.18268 0.958709C3.05747 1.99846 4.14908 2.84885 5.38655 3.4546C6.62402 4.06035 7.97966 4.4079 9.36536 4.47466C8.87292 2.18823 10.6419 0.337891 12.7685 0.337891C13.7722 0.337891 14.6755 0.743694 15.3122 1.39782C16.0995 1.25549 16.8523 0.970822 17.5235 0.589246C17.2632 1.36754 16.7174 2.0247 15.9929 2.43959C16.6954 2.36691 17.3729 2.17915 18.0002 1.91568C17.5266 2.58798 16.9338 3.18457 16.2532 3.66003Z" fill="white"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.0907 0.25C2.56118 0.25 1.67176 1.37423 1.67176 3.26408V4.65371H0.0957031V6.97119H1.67176V13.6917H4.82459V6.97119H6.93074L7.20967 4.65371H4.82459L4.83028 3.49462C4.83028 2.89123 4.89503 2.56677 5.88051 2.56677H7.19472V0.25H5.0907Z" fill="white"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.15119 2.43523C4.40761 1.41258 3.69201 0.538574 2.58881 0.538574C1.86128 0.538574 1.28285 0.889366 1.05624 1.46609C0.69248 2.38766 1.2411 3.34491 2.22504 3.49949C3.14935 3.65408 3.9544 3.20816 4.15119 2.43523ZM8.47479 5.88385C8.50162 5.85412 8.521 5.8348 8.53591 5.81993L8.53591 5.81993C8.55082 5.80507 8.56126 5.79466 8.5702 5.78277C9.32754 4.67689 10.4129 4.35582 11.6771 4.54608C13.1381 4.77202 14.0743 5.78872 14.3128 7.34647C14.3665 7.7151 14.3963 8.08967 14.3963 8.4583C14.3963 8.84625 14.396 9.2342 14.3956 9.62216C14.3945 10.786 14.3934 11.9499 14.4023 13.1137C14.4023 13.2861 14.3606 13.3397 14.1817 13.3397C13.3647 13.3278 12.5477 13.3278 11.7367 13.3397C11.5578 13.3397 11.5101 13.2921 11.5161 13.1137C11.522 11.663 11.522 10.2182 11.5161 8.76747C11.5161 8.44046 11.4922 8.11345 11.4028 7.79239C11.1046 6.76974 9.94176 6.41301 9.1069 7.09081C8.65965 7.45944 8.48075 7.94103 8.48671 8.51181C8.49069 9.42325 8.48936 10.3321 8.48804 11.2417V11.2421C8.48738 11.6971 8.48671 12.1524 8.48671 12.6083C8.48671 12.6593 8.48574 12.7103 8.48477 12.7612V12.7612C8.48233 12.8886 8.4799 13.016 8.49268 13.1434C8.5046 13.298 8.43901 13.3278 8.30185 13.3278C7.47295 13.3218 6.63809 13.3218 5.8092 13.3278C5.66011 13.3278 5.60645 13.298 5.60645 13.1316C5.61837 11.9008 5.62434 10.6701 5.62434 9.43933V9.43914C5.62434 7.92307 5.62434 6.407 5.61241 4.89687C5.61241 4.7304 5.64819 4.68283 5.81516 4.68283C6.64406 4.69472 7.47892 4.68878 8.30782 4.68283C8.4569 4.68283 8.49864 4.72445 8.49268 4.87309C8.47288 5.1445 8.47362 5.40772 8.47445 5.70015C8.47462 5.76005 8.47479 5.82117 8.47479 5.88385ZM4.00841 9.02363C4.00841 10.3911 4.00841 11.7527 4.01437 13.1202C4.01437 13.2926 3.97859 13.352 3.79373 13.3461C2.97079 13.3342 2.14786 13.3401 1.32493 13.3461C1.16988 13.3461 1.12217 13.3104 1.12217 13.1499C1.12217 10.3971 1.12217 7.64425 1.11621 4.89143C1.11621 4.74874 1.15199 4.70117 1.30107 4.70117C2.1419 4.70712 2.97676 4.70712 3.81758 4.70117C3.98455 4.70117 4.00841 4.76063 4.00841 4.90927V9.02363Z" fill="white"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer