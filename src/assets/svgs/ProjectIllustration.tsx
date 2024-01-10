import { useThemeContext } from "@hooks/index";

const ProjectIllustration = (): JSX.Element => {
  const { colorPattle } = useThemeContext();

  return (
    <svg
      id="projectillustration"
      width="140"
      height="140"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56.0148 84.6973L56.1974 85.1752C56.2543 85.3294 56.3402 85.5362 56.4137 85.7536L56.6792 86.5178C56.7831 86.8101 56.8676 87.1054 56.9784 87.4475C57.0839 87.7849 57.2089 88.1625 57.3068 88.5339L57.6486 89.7561C57.7612 90.1821 57.8558 90.6098 57.9698 91.0757C58.4583 93.0876 58.8054 95.1311 59.0084 97.1914C59.1248 98.2879 59.1743 99.3809 59.1987 100.505C59.2003 101.606 59.1738 102.736 59.0707 103.839C58.9695 104.936 58.8029 106.026 58.5717 107.104C58.3398 108.161 58.0336 109.201 57.6554 110.215C56.9015 112.226 55.8441 114.084 54.4707 115.727C53.7912 116.556 52.9971 117.295 52.2104 118.06C51.4125 118.814 50.5961 119.569 49.7438 120.3C48.0203 121.796 46.2196 123.2 44.3491 124.507C42.4602 125.835 40.4734 127.066 38.4355 128.195C37.4146 128.755 36.38 129.289 35.3328 129.798C34.2889 130.3 33.2329 130.775 32.1658 131.225C30.0374 132.113 27.8928 132.884 25.7666 133.522C23.7139 134.142 21.6319 134.66 19.5281 135.075C15.5047 135.878 11.812 136.207 9.06719 136.277L8.08582 136.294L7.20453 136.293L5.77773 136.255L4.86309 136.201L4.53988 136.174L4.51199 135.85L4.4584 134.936L4.42039 133.509L4.41957 132.628L4.43652 131.646C4.5068 128.901 4.83547 125.209 5.63801 121.185C6.05303 119.082 6.57137 117 7.19113 114.947C7.82961 112.821 8.60043 110.676 9.48828 108.548C9.938 107.48 10.4137 106.425 10.9148 105.381C11.4234 104.337 11.9566 103.299 12.5185 102.278C13.6475 100.24 14.878 98.2532 16.2064 96.3643C17.5133 94.4937 18.9175 92.693 20.4132 90.9696C21.1444 90.1173 21.8985 89.3006 22.6529 88.503C23.4183 87.7163 24.1574 86.9222 24.9862 86.2427C26.629 84.8693 28.487 83.8119 30.4979 83.058C31.5122 82.68 32.5519 82.3738 33.6093 82.1417C34.6867 81.9105 35.7769 81.7438 36.8741 81.6427C37.9775 81.5396 39.1073 81.5131 40.2084 81.5147C41.3323 81.5388 42.4249 81.5886 43.5217 81.705C45.582 81.9079 47.6256 82.2549 49.6374 82.7436C50.1031 82.8573 50.5307 82.9522 50.957 83.0648L52.1793 83.4066C52.5506 83.5048 52.9285 83.6295 53.2656 83.735C53.608 83.8455 53.903 83.9303 54.1953 84.0342L54.9596 84.2997C55.177 84.3732 55.3837 84.4591 55.5379 84.516C55.8521 84.6349 56.0148 84.6973 56.0148 84.6973Z"
        fill="#FFB636"
      />
      <path
        d="M21.0164 49.6978L1.18836 69.5258C-0.18211 70.8963 0.788593 73.2397 2.72672 73.2397H19.3914C19.9683 73.2397 20.5218 73.4688 20.9297 73.8768L31.7502 84.6972L49.3243 49.0607H22.5548C22.2691 49.0606 21.9861 49.1168 21.7222 49.2261C21.4582 49.3355 21.2184 49.4957 21.0164 49.6978ZM59.1065 107.349L69.927 118.17C70.3349 118.578 70.5641 119.131 70.5641 119.708V136.373C70.5641 138.311 72.9075 139.282 74.2779 137.911L94.106 118.083C94.5139 117.675 94.7431 117.122 94.7431 116.545V89.7752L59.1065 107.349Z"
        fill={colorPattle.primaryColor}
      />
      <path
        d="M138.263 4.88769L138.284 5.06187C138.297 5.17644 138.322 5.35308 138.34 5.57101C138.376 6.0066 138.457 6.68144 138.496 7.4941C138.619 9.16589 138.702 11.5194 138.644 14.3508C138.587 17.1839 138.388 20.4933 137.955 24.0857C137.858 24.9952 137.72 25.8956 137.587 26.8313C137.463 27.7766 137.287 28.7 137.126 29.6677C136.795 31.5946 136.382 33.5554 135.905 35.5556C134.912 39.7068 133.651 43.7893 132.13 47.7775C130.561 51.8848 128.679 55.9874 126.472 59.9728C124.261 63.9548 121.747 67.839 118.937 71.531C116.131 75.2265 113.033 78.7333 109.708 82.014C106.384 85.295 102.838 88.3542 99.1132 91.1307C98.1816 91.8244 97.2445 92.5066 96.2864 93.1593C95.3386 93.8227 94.3704 94.4571 93.4054 95.0854C91.4662 96.3328 89.486 97.5002 87.4852 98.5955C83.5465 100.75 79.4657 102.635 75.2711 104.235C71.2853 105.753 67.2081 107.018 63.0637 108.025C61.0679 108.506 59.1175 108.929 57.1938 109.263L55.7777 109.518C55.3085 109.598 54.8324 109.665 54.3703 109.737L52.999 109.946L51.6389 110.119C48.0659 110.571 44.7784 110.793 41.9661 110.87C39.1568 110.951 36.8167 110.881 35.1641 110.776C34.3596 110.746 33.6891 110.669 33.2588 110.639C33.043 110.623 32.8677 110.599 32.7545 110.587L32.582 110.568C31.2744 110.423 30.2827 109.385 30.1432 108.129L30.1241 107.957C30.1126 107.844 30.0888 107.669 30.0729 107.453C30.0426 107.023 29.9655 106.352 29.9351 105.548C29.8307 103.895 29.7612 101.555 29.8413 98.7457C29.9187 95.9334 30.1402 92.6458 30.5922 89.0728L30.7653 87.7127L30.9745 86.3414C31.0469 85.8793 31.1134 85.4035 31.1935 84.9341L31.4486 83.5179C31.7825 81.5943 32.2057 79.6439 32.6867 77.648C33.6927 73.5035 34.9583 69.4264 36.476 65.4407C38.077 61.2462 39.9613 57.1654 42.1159 53.2265C43.2116 51.2261 44.3789 49.2455 45.6261 47.3063C46.2544 46.3414 46.8888 45.3731 47.5521 44.4254C48.2048 43.467 48.8871 42.5302 49.5808 41.5986C52.3573 37.8733 55.4165 34.3273 58.6975 31.0034C61.9782 27.6793 65.485 24.5809 69.1805 21.7746C72.8725 18.9648 76.7566 16.4503 80.7387 14.2401C84.7241 12.0332 88.827 10.1503 92.934 8.58129C96.9221 7.06034 101.005 5.79943 105.156 4.80648C107.156 4.32988 109.117 3.91699 111.044 3.58613C112.011 3.42507 112.935 3.24871 113.88 3.12484C114.816 2.9914 115.716 2.85304 116.626 2.75652C120.218 2.32394 123.528 2.12433 126.361 2.06773C129.192 2.00949 131.546 2.09234 133.217 2.21621C134.03 2.25476 134.705 2.33625 135.14 2.37179C135.358 2.38984 135.535 2.41472 135.65 2.42785L135.824 2.4489C137.128 2.60613 138.112 3.63945 138.263 4.88769Z"
        fill="white"
      />
      <path
        d="M66.4743 74.2375L66.6337 74.6687C66.7226 74.9369 66.8423 75.3227 66.9249 75.7526C67.1207 76.6426 67.1855 77.726 66.8317 78.6682C66.6572 79.1418 66.3346 79.5367 66.0308 80.0141L65.021 81.533L62.597 85.173C61.6343 86.5993 60.6634 88.02 59.6843 89.4351C58.5931 91.0094 57.4888 92.5746 56.3716 94.1306L54.5915 96.5803L52.742 99.0645C51.4872 100.726 50.2031 102.405 48.8975 104.061C47.6045 105.712 46.2952 107.35 44.9698 108.975C43.6625 110.584 42.3806 112.172 41.119 113.688L39.2681 115.928C38.655 116.651 38.0975 117.401 37.45 118.027C36.8066 118.656 36.0642 119.152 35.2111 119.497C34.3654 119.849 33.4395 120.08 32.5443 120.296C30.8567 120.696 29.1507 121.014 27.4323 121.248C26.6383 121.357 25.8789 121.442 25.1617 121.506C24.4483 121.574 23.7582 121.601 23.1533 121.645C22.5438 121.683 21.962 121.68 21.4758 121.697C20.9822 121.707 20.5379 121.691 20.1901 121.69C19.8349 121.682 19.5511 121.665 19.3654 121.658L19.0739 121.639L19.0542 121.347C19.0479 121.162 19.0302 120.877 19.0222 120.522C19.0217 120.175 19.0055 119.731 19.0154 119.237C19.0323 118.75 19.0293 118.169 19.0679 117.559C19.1111 116.954 19.1384 116.264 19.2062 115.551C19.2702 114.834 19.3555 114.074 19.4644 113.28C19.6987 111.562 20.0165 109.856 20.4165 108.168C20.6325 107.273 20.8638 106.347 21.2157 105.501C21.5603 104.648 22.0563 103.906 22.6857 103.263C23.3114 102.615 24.0614 102.058 24.7852 101.445L27.0252 99.5939C28.5409 98.3322 30.1287 97.0501 31.7379 95.743C33.3443 94.4333 34.9899 93.1161 36.6516 91.8154C38.3083 90.5094 39.987 89.2256 41.6484 87.9708L44.1325 86.1213L46.5823 84.3412C48.1383 83.2241 49.7035 82.1198 51.2777 81.0285C52.7816 79.9865 54.2142 79.0119 55.5398 78.1159L59.1798 75.6919L60.6987 74.6821C61.1759 74.3783 61.5707 74.0556 62.0446 73.8812C62.9869 73.5273 64.0702 73.5921 64.9603 73.7879C65.3901 73.8705 65.7759 73.9903 66.0442 74.0791L66.4743 74.2375Z"
        fill={colorPattle.primaryColor}
      />
      <path
        d="M99.0153 56.5086C99.0153 64.689 92.3836 71.3207 84.2032 71.3207C76.0227 71.3207 69.3911 64.689 69.3911 56.5086C69.3911 48.3282 76.0227 41.6965 84.2032 41.6965C92.3836 41.6965 99.0153 48.3282 99.0153 56.5086ZM106.461 24.8224C101.253 24.8224 97.032 29.0437 97.032 34.2511C97.032 39.4584 101.253 43.6797 106.461 43.6797C111.668 43.6797 115.889 39.4584 115.889 34.2511C115.889 29.0437 111.668 24.8224 106.461 24.8224Z"
        fill="var(--gray)"
      />
    </svg>
  );
};

export default ProjectIllustration;
