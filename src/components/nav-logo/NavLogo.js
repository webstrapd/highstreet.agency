/* @flow */
import React from 'react';
import classnames from 'classnames';

// $FlowFixMe
import './NavLogo.scss';

type Props = {
  className?: ?string,
};

export default function NavLogo({ className }: Props) {
  return (
    <svg
      className={classnames('nav-logo', className)}
      width="203px"
      height="55px"
      viewBox="0 0 203 55"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
    >
      <g
        id="Website-Marketting-Page"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Home-page"
          transform="translate(-277.000000, -63.000000)"
          fill="#FFFFFF"
        >
          <g id="Hero">
            <g id="Group-3" transform="translate(276.000000, 63.000000)">
              <g id="High-Street-Logomark-(White)">
                <g id="Arrow-Logo-(White)" fillRule="evenodd">
                  <path
                    d="M1.70819658,44.3627985 L19.233787,44.3627985 C20.4847993,44.3627985 21.4989451,43.3486526 21.4989451,42.0976403 C21.4989451,40.8466279 20.4847993,39.8324821 19.233787,39.8324821 L4.24518785,39.8324821 L7.52915316,37.0639554 L14.6233338,37.0639554 C15.8743461,37.0639554 16.888492,36.0498095 16.888492,34.7987972 C16.888492,33.5477849 15.8743461,32.533639 14.6233338,32.533639 L12.9029146,32.533639 L13.4607138,32.0633898 C14.215938,31.4267028 14.756818,30.6301253 15.0755654,29.7651123 L20.0720512,29.7651123 C21.3230635,29.7651123 22.3372094,28.7509665 22.3372094,27.4999541 C22.3372094,26.2489418 21.3230635,25.2347959 20.0720512,25.2347959 L14.750854,25.2347959 C14.5758723,24.9130999 14.3659777,24.6041816 14.120725,24.3132682 C13.9353527,24.0933837 13.7330193,23.8883776 13.5155861,23.7001361 L12.090377,22.4662693 L17.8366799,22.4662693 C19.0876923,22.4662693 20.1018381,21.4521234 20.1018381,20.2011111 C20.1018381,18.9500987 19.0876923,17.9359529 17.8366799,17.9359529 L6.85752052,17.9359529 L3.65966377,15.1674262 L29.3682882,15.1674262 L38.9919201,23.8521672 C41.2469883,25.8872287 41.425339,29.365066 39.3902774,31.6201342 C39.2643839,31.7596378 39.1314238,31.892598 38.9919201,32.0184915 L38.421081,32.533639 L22.3669963,32.533639 C21.115984,32.533639 20.1018381,33.5477849 20.1018381,34.7987972 C20.1018381,36.0498095 21.115984,37.0639554 22.3669963,37.0639554 L33.4010007,37.0639554 L15.746733,52.9958555 C13.653387,54.8849726 10.4704693,54.8849726 8.37712329,52.9958555 L3.52095265,48.6134576 C2.27346552,47.4876765 1.66149986,45.9203742 1.70819658,44.3627985 Z M24.3482079,10.6371098 L1.25394547,10.6371098 C1.23791189,9.33891967 1.67881419,8.03001498 2.59542382,6.97126185 C2.64915092,6.909203 2.70426059,6.8483547 2.7607114,6.78876268 L7.05248665,2.2581717 C9.10584321,0.0905561549 12.5135752,-0.0429246037 14.7301913,1.95743624 L24.3482079,10.6371098 Z M24.8817889,17.9359529 C23.6307766,17.9359529 22.6166308,18.9500987 22.6166308,20.2011111 C22.6166308,21.4521234 23.6307766,22.4662693 24.8817889,22.4662693 L29.013536,22.4662693 C30.2645484,22.4662693 31.2786942,21.4521234 31.2786942,20.2011111 C31.2786942,18.9500987 30.2645484,17.9359529 29.013536,17.9359529 L24.8817889,17.9359529 Z"
                    id="Combined-Shape"
                  />
                </g>
                <text
                  id="HIGH-STREET"
                  fontFamily="WorkSans-SemiBold, Work Sans"
                  fontSize="18"
                  fontWeight="500"
                  letterSpacing="2.79999995"
                >
                  <tspan x="56.9648241" y="34">
                    HIGH STREET
                  </tspan>
                </text>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
