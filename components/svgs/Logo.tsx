import * as React from "react";
import Svg, { Rect, Path, SvgProps } from "react-native-svg";

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={45} height={45} viewBox="0 0 1080 1080" {...props}>
      <Rect width="100%" height="100%" fill="transparent" />
      <Rect
        vectorEffect="non-scaling-stroke"
        x={-540}
        y={-540}
        rx={0}
        ry={0}
        width={1080}
        height={1080}
        transform="translate(540 540)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="transparent"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-1.05-413.46h466.972v826.923h-931.84V-413.46c143.23 0 286.59 0 430.247.403-9.76 1.53-19.925 2.067-29.856 3.883-59.58 10.898-111.442 37.18-153.674 80.686-70.052 72.166-98.424 158.954-85.85 258.458 9.436 74.682 42.513 138.115 99.549 187.323 78.566 67.784 169.287 88.987 269.115 59.977 88.36-25.678 149.162-84.294 186.317-167.95 1.337-3.01 2.178-5.208 6.573-4.636 28.045 3.653 54.616-1.146 79.354-15.08 59.964-33.773 77.845-108.49 38.21-163.566-27.817-38.653-66.93-54.704-114.043-51.732-5.01.316-7.302-.541-9.361-5.527-17.212-41.66-42.5-77.86-76.027-107.951-45.816-41.12-99.276-65.766-160.754-72.356-4.99-.535-9.955-1.283-14.932-1.932m242.488 651.996h-33.09v123.008c11.53 0 22.825.1 34.118-.036 7.314-.088 14.682-.04 21.923-.911 11.254-1.355 17.382-7.606 17.536-18.802.368-26.793.33-53.598-.031-80.392-.134-9.957-5.603-17.334-15.34-19.769-7.81-1.953-16.065-2.132-25.116-3.098M62.643 302.381l-10.969-6.605c12.491-5.431 14.744-9.048 14.27-23.408-.048-1.496-.078-2.993-.185-4.486-1.181-16.505-7.713-26.435-21.165-27.827-16.93-1.751-34.07-1.474-51.225-2.075v124.046c19.694-.51 39.127-.724 58.526-1.647 8.399-.4 14.038-5.682 14.882-14.219 1.041-10.54 1.117-21.234.727-31.83-.142-3.856-2.825-7.618-4.86-11.949m-434.638-44.007c-.345 2.13-.984 4.26-.99 6.393-.066 23.606-.471 47.223.146 70.814.329 12.54 7.343 21.5 19.231 26.039 10.964 4.185 22.196 4.28 33.221.453 11.917-4.135 19.716-12.77 20.112-25.353.77-24.421.365-48.886.133-73.33-.062-6.49-2.974-12.26-7.47-16.992-10.67-11.228-24.22-12.217-38.34-10.093-12.694 1.91-21.577 8.917-26.043 22.07m492.94 89.657v13.227h29.88c0-15.426.117-30.569-.05-45.708-.085-7.815-4.211-13.08-11.425-15.978-1.081-.434-2.131-.948-3.606-1.608 11.195-3.052 14.053-5.722 14.823-16.463.542-7.577.301-15.37-.85-22.872-1.737-11.326-9.72-18.375-21.157-19.008-13.458-.745-26.955-.77-40.436-1.077-2.932-.067-5.866-.01-8.675-.01V361.29h32.231v-54.44c7.45.299 8.866 1.344 9.069 8.195.314 10.656.154 21.326.195 32.987m237.472-52.497H330.79V313.4l5.265.313c0 8.287.116 16.232-.057 24.17-.068 3.144-1.728 5.486-5.252 5.439-3.753-.05-4.414-2.894-4.775-5.851-.06-.496-.11-.996-.11-1.494.004-24.146-.01-48.291.056-72.436.01-3.236.334-6.674 4.765-6.786 4.296-.108 4.585 3.303 4.665 6.285.18 6.744.056 13.497.056 20.29h32.908c-.433-7.002-.745-13.764-1.295-20.506-.826-10.137-6.112-17.578-14.935-22.157-13.291-6.9-27.231-7.434-40.88-1.439-9.253 4.065-16.408 11.145-16.64 21.863-.56 25.92-1.105 51.89-.093 77.777.495 12.676 9.373 21.079 21.668 24.55 11.422 3.226 21.459.943 28.505-9.964l2.999 7.769h20.314v-32.755-32.934h-9.537m-818.31-12.488c.285 16.806.188 33.63.96 50.412.77 16.722 7.99 25.912 23.289 29.397 6.851 1.561 14.292 2.048 21.262 1.249 12.941-1.485 24.285-7.31 27.924-20.649 2.745-10.058 2.551-20.918 3.695-31.7h-33.292c0 2.844.063 5.472-.012 8.096-.18 6.31-.336 12.622-.68 18.923-.174 3.195-2.297 5.263-5.288 4.387-1.9-.556-3.592-2.817-4.707-4.708-.756-1.281-.447-3.249-.448-4.91-.022-22.32-.033-44.641.02-66.962.004-2.14-.15-4.655.873-6.315 1.007-1.633 3.4-3.24 5.222-3.281 1.461-.033 3.62 2.02 4.306 3.64.86 2.03.67 4.561.689 6.878.066 7.932.025 15.865.025 23.739h33.005c-.633-10.1-1.088-19.87-1.899-29.611-.924-11.098-7.325-18.419-17.267-22.474-12.846-5.24-25.991-5.413-38.833.034-10.45 4.432-16.644 12.565-17.912 23.926-.7 6.268-.646 12.62-.931 19.929m296.712-44.36c-.238 1.581-.682 3.161-.683 4.742-.04 37.797-.03 75.594-.03 113.391v4.445h55.575v-24.86h-22.922v-26.06h19.344v-23.083h-19.462v-23.714h21.116v-25.003c-17.457 0-34.727 0-52.938.143m569.63-.153h-25.991V361.33h55.29v-24.813h-23.074v-26.042H432.2v-23.089H412.77v-24.013h20.888v-24.84H406.45M-47.993 310.53c.402-.23 1.153-.459 1.155-.693.061-7.379.05-14.758.05-22.41h-19.555v-23.9h21.091v-24.701h-53.365V361.23h55.265v-24.91h-23.063v-25.777c5.902 0 11.697 0 18.422-.014m-239.903-65.38v116.201h32.328v-50.834h19.787v-23.085h-19.469v-24.125h21.825v-24.42h-54.471v6.264m62 99.887v16.315h32.323v-50.83h19.796v-23.082h-19.477v-24.125h21.834v-24.437h-54.477v106.159M163.1 330.04v31.306h32.152v-122.5H163.1v91.194z"
        transform="translate(540 540)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#9d5e2e"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-45.159-301.69c5.446.649 10.412 1.397 15.4 1.932 61.48 6.59 114.94 31.236 160.755 72.356 33.527 30.091 58.815 66.291 76.027 107.951 2.06 4.986 4.35 5.843 9.361 5.527 47.114-2.972 86.226 13.08 114.042 51.732 39.636 55.077 21.755 129.793-38.21 163.567-24.737 13.933-51.308 18.732-79.353 15.08-4.395-.573-5.236 1.625-6.573 4.636-37.155 83.655-97.957 142.27-186.317 167.949-99.828 29.01-190.549 7.807-269.115-59.977-57.036-49.208-90.113-112.64-99.55-187.323-12.573-99.504 15.799-186.292 85.851-258.458 42.232-43.506 94.094-69.788 153.674-80.686 9.93-1.816 20.095-2.353 30.314-3.883 11.184-.403 22.205-.403 33.694-.403m1.282 167.518l-.384.313.6.186c.07-.305.139-.61-.548-.316.67 1.678 1.3 3.373 2.019 5.03 12.67 29.192 11.762 57.499-5.595 84.69-22.378 35.056-24.89 71.675-9.094 109.932 1.886 4.569 4.076 5.39 8.547 4.005 17.24-5.342 28.782-17.376 37.714-32.193C3.37 14.27 8.773-11.318 7.323-38.067c-2.152-39.707-12.871-75.361-51.2-96.105m95.826-60.39c14.36-6.947 27.83-15.309 40.643-25.03-88.471-68.754-216.652-69.249-305.671-.374 62.695 50.696 168.631 73.112 265.028 25.403M-99.116 240.325c28.019 3.943 56.029 4.019 84.079.159 51.802-7.129 98.69-26.215 140.15-58.069 9.825-7.548 19.663-15.738 27.211-25.414 8.394-10.76 14.198-23.546 21.074-35.48.86-1.495 1.387-3.181 2.068-4.778-67.59 67.198-148.704 100.65-243.73 97.202-95.256-3.457-173.653-43.051-235.513-115.809 4.958 13.51 9.123 27.48 18.442 38.367 10.786 12.602 22.308 24.799 34.83 35.648 43.328 37.537 93.9 59.626 151.389 68.174m390.87-185.074c1.482-1.575 3.08-3.057 4.427-4.739 19.589-24.435 24.125-51.4 10.486-79.677-14.712-30.503-40.904-44.857-74.763-48.178 11.664 53.537 9.278 105.802-7.17 157.728 25.986.564 48.134-6.95 67.02-25.134M-128.26-24.722c.522 5.13.806 10.297 1.607 15.382 3.365 21.359 10.456 41.22 24.36 58.153 6.445 7.848 13.925 14.47 24.326 18.774-.693-2.025-1.247-3.19-1.486-4.416-2.443-12.52-6.115-24.963-6.984-37.596-2.073-30.155 6.2-57.736 23.062-82.98 14.824-22.194 12.225-55.32-4.929-75.609-2.027-2.397-3.717-2.989-6.778-1.87-14.25 5.207-24.556 15.07-32.67 27.42-16.33 24.852-21.503 52.596-20.508 82.742m107.437 139.488c42.169-5.022 81.325-18.551 117.278-41.636-12.585-.818-25.049-.758-37.511-.838-9.316-.06-18.63-.295-27.944-.462-9.206-.166-18.427-.068-27.613-.596-9.314-.536-17.024 1.274-25.08 7.228-25.045 18.514-56.49 17.164-81.264-2.53-4.662-3.707-9.398-4.414-14.703-4.422-24.799-.04-49.597-.022-74.395-.025h-17.41c57.673 36.631 120.32 50.579 188.642 43.281m-158.622 36.765c-40.879-17.791-76.2-43.325-105.849-76.576-3.878-4.35-7.75-4.697-14.085-3.411 71.173 91.668 163.597 133.148 277.955 121.233C63.962 183.88 132.32 142.89 184.244 73.79c-5.711-1.625-8.707.55-11.73 3.909a252.52 252.52 0 01-16.846 17.029c-55.124 50.638-120.177 78.154-194.833 82.306-48.412 2.692-95.05-5.812-140.28-25.504m-56.648-73.307c-7.042-7.502-15.82-8.148-25.566-6.747C-144.063 191.12 44.457 181.37 149.05 73.309c-5.007 0-9.614-.16-14.2.085-1.669.089-3.526.81-4.892 1.801-67.991 49.365-143.689 68.879-226.992 58.21-50.731-6.496-96.821-25.11-139.058-55.18M-265.2 34.81l1.266-204.407-1.435-.786c-8.352 13.627-16.722 27.243-25.008 40.91-.46.76-.285 1.943-.302 2.93-.509 27.944-1.16 55.887-1.458 83.834-.308 28.962-.271 57.927-.384 86.891-.007 1.762 0 3.524 0 5.307h27.321V34.81m43.654-139.995c.394-26.456.814-52.912 1.107-79.37.016-1.421-.623-3.376-1.658-4.194-4.922-3.886-10.087-7.464-16.382-12.035-1.173 3.43-2.872 6.155-2.93 8.914-.729 34.102-1.425 68.208-1.717 102.317-.38 44.455-.392 88.914-.56 133.372-.008 1.816-.002 3.632-.002 6.48l22.007 1.281c0-52.6 0-104.186.135-156.765m325.023 92.257v65.871h18.666c0-7.475-.062-14.755.01-22.034.706-71.786 1.3-143.574 2.36-215.355.11-7.434-3.014-11.568-8.452-15.518-3.876 4.229-10.376 5.357-10.405 13.252-.134 35.801-.854 71.6-1.342 107.4-.298 21.813-.56 43.626-.837 66.384M28.479-47.978v99.763h18.869l2.108-212.1-19.088 7.184c-.634 34.981-1.261 69.592-1.89 105.153m134.83-6.212c.389-25.478.788-50.957 1.149-76.436.04-2.802.848-6.182-.39-8.312-5.508-9.483-11.63-18.608-17.532-27.863l-1.59.596L142.94 51.04h20.37V-54.19M-183.2-139.105c.167-7.82.414-15.639.429-23.458.003-1.411-.529-3.53-1.523-4.115-4.513-2.65-9.28-4.868-15.091-7.818l-1.856 225.923h15.792c.753-63.436 1.5-126.492 2.249-190.532M68.156 49.701c.95.923 1.836 2.55 2.86 2.643 3.606.327 7.258.127 10.871.127l2.201-230.285c-4.056 2.22-7.795 4.025-11.24 6.28-1.216.797-2.402 2.676-2.435 4.087-.743 31.93-1.574 63.861-1.87 95.797-.374 40.12-.284 80.243-.387 121.35m-217.684-33.89l1.51-167.98-15.005-5.164L-165.14 51.5h15.612V15.81m331.837 13v22.384h11.397c12.571-30.792 6.028-128.115-10.598-145.722-.27 41.408-.535 81.873-.799 123.338m-313.938 225.005c-7.051-1.92-14.167-3.636-21.136-5.82-6.97-2.186-13.832-4.736-20.668-7.318-6.554-2.477-13.015-5.201-19.517-7.816l-.374 1.383c78.812 45.072 159.607 49.354 242.342 11.744-1.858-.289-3.665.283-5.47.866-28.659 9.27-58.027 14.422-88.144 15.471-29.12 1.014-57.853-1.736-87.033-8.51M-311.836 25.81V-75.05c-11.431 41.123-12.948 82.557-5.869 124.557h5.869V25.81M-7.01-143.508l-8.417 1.72 24.953 30.54v-35.663c-5.077 1.06-10.387 2.168-16.536 3.403m-114.085-1.334l-6.388-1.297v30.46l22.344-26.068a3472.03 3472.03 0 00-15.956-3.095m-183.531 241.7l.674.251c-.066-.223-.132-.446-.674-.251z"
        transform="translate(583.64 428.23)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#030303"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-3.335-61.524c8.554.966 16.809 1.145 24.62 3.098 9.736 2.435 15.205 9.812 15.339 19.77.36 26.793.4 53.598.031 80.391-.154 11.196-6.282 17.447-17.536 18.802-7.24.871-14.609.823-21.923.91-11.293.137-22.588.037-34.118.037V-61.524h33.587M4.85 31.204c.018-21.271.156-42.544-.019-63.813-.054-6.607-2.297-8.078-9.433-7.398v80.032c7.1.29 8.562-.998 9.452-8.821z"
        transform="translate(785.27 840.05)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#020202"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M32.36 2.644c1.779 4.068 4.462 7.83 4.604 11.687.39 10.595.314 21.288-.727 31.829-.844 8.537-6.483 13.82-14.882 14.219-19.399.923-38.832 1.138-58.526 1.647V-62.02c17.155.601 34.295.324 51.225 2.075 13.452 1.392 19.984 11.322 21.165 27.827.107 1.493.137 2.99.186 4.486.473 14.36-1.78 17.977-14.271 23.408 3.512 2.114 7.24 4.36 11.225 6.868M.042 39.792c4.672-.666 5.022-4.39 5.177-7.858.245-5.465.181-10.951.05-16.424-.177-7.382-2.155-9.004-10.156-8.487v33.438c1.596-.179 2.873-.321 4.929-.669m-2.193-52.364c4.442.185 6.905-1.852 7.028-6.382.126-4.631.564-9.3.159-13.89-.559-6.333-3.095-7.917-10.193-6.99 0 8.372-.05 16.809.094 25.242.011.684 1.345 1.345 2.912 2.02z"
        transform="translate(570.55 840)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#020202"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-35.41-42.155c4.382-12.753 13.265-19.76 25.959-21.67 14.12-2.124 27.67-1.135 38.34 10.093C33.385-49 36.297-43.23 36.36-36.739c.232 24.443.636 48.908-.133 73.33-.396 12.583-8.195 21.217-20.112 25.352-11.025 3.827-22.257 3.732-33.22-.453-11.89-4.538-18.903-13.5-19.232-26.04-.617-23.59-.212-47.207-.146-70.813.006-2.132.645-4.262 1.074-6.792m31.28 2.007c-.196 1.648-.56 3.296-.563 4.945-.028 23.478-.016 46.957.023 70.436.003 1.653-.154 3.565.594 4.886.762 1.349 2.534 2.896 3.893 2.924 1.381.028 3.168-1.431 4.084-2.728.763-1.081.686-2.87.7-4.347.16-15.646.337-31.291.352-46.937.008-9.15-.131-18.307-.544-27.445-.075-1.653-1.566-4.292-2.827-4.574-1.56-.347-3.561 1.292-5.712 2.84z"
        transform="translate(203.49 840.12)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#030303"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M5.785 47.634c-.041-11.163.119-21.833-.196-32.49C5.387 8.295 3.97 7.25-3.479 6.95v54.44H-35.71V-61.365c2.809 0 5.743-.057 8.675.01 13.48.308 26.978.332 40.436 1.077 11.436.633 19.42 7.682 21.157 19.008 1.151 7.503 1.392 15.295.85 22.872-.77 10.74-3.628 13.41-14.823 16.463 1.475.66 2.525 1.174 3.606 1.608 7.214 2.897 11.34 8.163 11.426 15.978.166 15.14.049 30.282.049 45.708H5.786V47.634m-9.573-71.526v11.181c7.62.031 9.312-1.396 9.57-7.793.16-3.992.172-8 .007-11.991-.244-5.888-2.885-7.91-9.577-7.258v15.861z"
        transform="translate(655.16 839.9)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#030303"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M27.802-4.395h9.042v65.689H16.53l-2.999-7.77C6.485 64.433-3.552 66.715-14.974 63.49c-12.295-3.472-21.173-11.875-21.668-24.55-1.012-25.889-.468-51.857.093-77.778.232-10.718 7.387-17.798 16.64-21.863 13.649-5.995 27.589-5.46 40.88 1.439 8.823 4.58 14.109 12.02 14.935 22.157.55 6.742.862 13.504 1.295 20.506H4.293c0-6.793.124-13.546-.056-20.29-.08-2.982-.37-6.393-4.665-6.285-4.43.112-4.756 3.55-4.765 6.786-.066 24.145-.052 48.29-.057 72.436 0 .498.05.998.111 1.494.361 2.957 1.022 5.8 4.775 5.851 3.524.047 5.184-2.295 5.252-5.44.173-7.937.057-15.882.057-24.17-1.372-.08-3.142-.186-5.265-.312V-4.395h28.122z"
        transform="translate(871.1 839.92)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#020202"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-38.562-17.281c.285-6.812.232-13.163.931-19.431 1.268-11.36 7.462-19.494 17.912-23.926 12.842-5.447 25.987-5.273 38.833-.034 9.942 4.055 16.343 11.376 17.267 22.474.811 9.74 1.266 19.51 1.9 29.61H5.274c0-7.873.04-15.806-.025-23.738-.02-2.317.17-4.848-.69-6.877-.686-1.62-2.844-3.674-4.305-3.641-1.821.041-4.215 1.648-5.222 3.281-1.024 1.66-.869 4.174-.874 6.315-.052 22.32-.04 44.641-.02 66.962.002 1.661-.307 3.629.449 4.91 1.115 1.891 2.808 4.152 4.707 4.708 2.991.876 5.114-1.192 5.288-4.387.344-6.301.5-12.613.68-18.923.075-2.624.012-5.252.012-8.095h33.292c-1.144 10.78-.95 21.64-3.695 31.7C31.232 56.965 19.89 62.79 6.948 64.274c-6.97.8-14.41.312-21.262-1.249-15.299-3.485-22.518-12.675-23.288-29.397-.773-16.783-.676-33.606-.96-50.91z"
        transform="translate(118.67 839.83)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#030303"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-26.6-61.293c17.741-.072 35.01-.072 52.468-.072v25.003H4.752v23.714h19.462v23.083H4.87v26.06h22.922v24.86h-55.576V56.91c0-37.797-.008-75.594.03-113.391.002-1.58.446-3.161 1.155-4.812z"
        transform="translate(403.89 839.9)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#030303"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-1.15-61.395h26.709v24.84H4.67v24.012H24.1v23.09H4.575v26.04h23.074v24.814h-55.29V-61.395H-1.15z"
        transform="translate(948.11 839.93)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#030303"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M22.522 10.507c-6.26.007-12.055.007-17.957.007v25.777h23.063v24.91h-55.265V-61.204h53.365v24.7H4.638v23.9h19.554c0 7.653.011 15.032-.05 22.41-.002.235-.753.463-1.62.701z"
        transform="translate(469.01 840.02)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#030303"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-27.236-55.453v-5.78h54.47v24.42H5.41v24.125h19.47v23.085H5.091V61.23h-32.328V-55.453z"
        transform="translate(279.34 840.12)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#040404"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-27.237 44.418v-105.66H27.24v24.438H5.406v24.125h19.477v23.083H5.087v50.829h-32.324V44.418z"
        transform="translate(341.34 840.12)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#040404"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-16.08 29.44v-90.694h32.152v122.5H-16.08V29.44z"
        transform="translate(719.18 840.09)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#060606"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M111.864 25.424C15.792 72.946-90.144 50.53-152.839-.166c89.019-68.875 217.2-68.38 305.671.373-12.813 9.722-26.283 18.084-40.968 25.217z"
        transform="translate(523.4 208.43)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#fefefe"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-35.4 69.571c-57.044-8.524-107.617-30.613-150.944-68.15-12.523-10.85-24.045-23.046-34.831-35.648-9.319-10.887-13.484-24.856-18.442-38.367C-177.757.164-99.36 39.758-4.104 43.215c95.026 3.448 176.14-30.004 243.73-97.202-.68 1.597-1.207 3.283-2.068 4.777-6.876 11.935-12.68 24.72-21.074 35.48-7.548 9.677-17.386 17.867-27.21 25.415-41.46 31.854-88.35 50.94-140.151 58.069-28.05 3.86-56.06 3.784-84.524-.183z"
        transform="translate(519.48 598.96)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#fcfcfc"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M21.873 53.963C3.238 71.894-18.91 79.41-44.895 78.845c16.447-51.926 18.833-104.19 7.169-157.728 33.86 3.321 60.051 17.675 74.763 48.178C50.676-2.427 46.14 24.537 26.551 48.972c-1.348 1.682-2.945 3.164-4.678 4.991z"
        transform="translate(853.26 429.77)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#fefefe"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-13.712-102.422C24.162-81.288 34.881-45.634 37.033-5.927c1.45 26.75-3.953 52.337-17.94 75.542-8.933 14.817-20.474 26.85-37.715 32.193-4.471 1.385-6.661.564-8.547-4.005-15.796-38.257-13.284-74.876 9.094-109.932C-.718-39.32.19-67.627-12.48-96.82c-.72-1.657-1.348-3.352-1.652-5.275.367-.246.42-.328.42-.328z"
        transform="translate(553.93 396.09)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#fefefe"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-37.274 8.739c-.92-29.687 4.252-57.431 20.582-82.283 8.114-12.35 18.42-22.213 32.67-27.42 3.061-1.119 4.751-.527 6.778 1.87 17.154 20.288 19.753 53.415 4.929 75.608C10.822 1.76 2.55 29.34 4.623 59.494c.869 12.634 4.541 25.077 6.984 37.597.24 1.227.793 2.391 1.486 4.416-10.401-4.304-17.88-10.926-24.325-18.774C-25.137 65.8-32.228 45.94-35.593 24.58c-.801-5.085-1.085-10.252-1.68-15.841z"
        transform="translate(492.58 394.31)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#fefefe"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M35.245 20.942c-67.88 7.202-130.527-6.746-188.2-43.377h17.41c24.798.003 49.596-.015 74.395.025 5.305.008 10.04.715 14.703 4.421 24.774 19.695 56.22 21.045 81.265 2.531 8.055-5.954 15.765-7.764 25.08-7.228 9.185.528 18.406.43 27.612.596 9.314.167 18.628.402 27.944.462 12.462.08 24.926.02 37.511.838-35.953 23.085-75.11 36.614-117.72 41.732z"
        transform="translate(527.13 522.14)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#fdfdfd"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-121.549 18.897c44.904 19.496 91.542 28 139.954 25.308 74.656-4.152 139.709-31.668 194.833-82.306a252.52 252.52 0 0016.846-17.03c3.023-3.358 6.019-5.533 11.73-3.908C189.889 10.06 121.532 51.05 36.146 59.947-78.212 71.862-170.636 30.382-241.809-61.286c6.335-1.286 10.207-.938 14.085 3.411 29.648 33.251 64.97 58.785 106.175 76.772z"
        transform="translate(637.93 701.43)"
        stroke="none"
        strokeWidth={0}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#4a76a3"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M13.03 95.76v14.18h-27.322c0-1.784-.006-3.546.001-5.308.113-28.964.076-57.93.384-86.891.298-27.947.95-55.89 1.458-83.834.017-.987-.159-2.17.302-2.93 8.286-13.667 16.656-27.283 25.008-40.91l1.435.786c-.422 68.136-.844 136.271-1.266 204.907z"
        transform="translate(305.41 367.79)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#fdfdfd"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M10.446-30.09c-.067 52.083-.067 103.67-.067 156.269l-22.007-1.28c0-2.849-.006-4.665.001-6.481.17-44.458.18-88.917.561-133.372.292-34.109.988-68.215 1.717-102.317.058-2.76 1.757-5.483 2.93-8.914 6.295 4.571 11.46 8.15 16.382 12.035 1.035.818 1.674 2.773 1.658 4.195-.293 26.457-.713 52.913-1.175 79.865z"
        transform="translate(351.58 353.62)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#fefefe"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-10.523 60.109c.278-22.286.539-44.1.837-65.912.488-35.8 1.208-71.599 1.342-107.4.029-7.895 6.529-9.023 10.405-13.252 5.438 3.95 8.561 8.084 8.452 15.518-1.06 71.781-1.654 143.569-2.36 215.355-.072 7.279-.01 14.559-.01 22.034h-18.666V60.11z"
        transform="translate(697.63 354.71)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#fcfcfc"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-10.49 5.807c.627-35.086 1.254-69.697 1.888-104.678l19.088-7.184-2.108 212.1h-18.87l.001-100.238z"
        transform="translate(622.61 373.96)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#fdfdfd"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M9.459 4.19v104.73h-20.37l2.007-217.245 1.59-.596c5.9 9.255 12.023 18.38 17.531 27.863 1.238 2.13.43 5.51.39 8.312-.361 25.479-.76 50.958-1.148 76.936z"
        transform="translate(737.49 370.35)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#fdfdfd"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M8.8-77.083C8.053-13.535 7.306 49.52 6.553 112.957H-9.24l1.856-225.923c5.812 2.95 10.578 5.168 15.091 7.818.994.584 1.526 2.704 1.523 4.115-.015 7.82-.262 15.639-.43 23.95z"
        transform="translate(391.63 366.69)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#fcfcfc"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-7.967 111.848c.106-40.615.016-80.739.39-120.858.296-31.936 1.127-63.867 1.87-95.797.033-1.411 1.22-3.29 2.435-4.086 3.445-2.256 7.184-4.062 11.24-6.281l-2.2 230.285c-3.614 0-7.266.2-10.871-.127-1.025-.093-1.911-1.72-2.864-3.136z"
        transform="translate(659.76 365.58)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#fdfdfd"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M7.052 69.23v35.189H-8.56l2.117-208.833 15.006 5.165C8.06-43.314 7.556 12.708 7.052 69.23z"
        transform="translate(427.06 375.32)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#fdfdfd"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-8.98 49.98c.263-40.965.528-81.43.798-122.838C8.444-55.251 14.987 42.072 2.416 72.864H-8.98V49.98z"
        transform="translate(774.93 406.56)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#fcfcfc"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-59.082 1.808c28.783 6.64 57.517 9.391 86.636 8.377 30.117-1.049 59.485-6.2 88.145-15.47 1.804-.584 3.611-1.156 5.47-.867-82.736 37.61-163.531 33.328-242.343-11.744l.374-1.383c6.502 2.615 12.963 5.34 19.517 7.816 6.836 2.582 13.698 5.132 20.668 7.317 6.969 2.185 14.085 3.9 21.533 5.954z"
        transform="translate(540 598.93)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#f6f6f6"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M5.074 39.08v23.197H-.795c-7.08-42-5.562-83.434 5.869-124.556V39.08z"
        transform="translate(266.73 415.46)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#f4f4f4"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-3.64-14.491c5.729-1.172 11.04-2.28 16.116-3.34V17.83l-24.953-30.539c2.2-.449 5.308-1.084 8.836-1.783z"
        transform="translate(580.69 299.15)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#f6f6f6"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-4.357-13.862a6418.033 6418.033 0 0115.528 3.025l-22.344 26.068v-30.46c2.325.472 4.357.885 6.816 1.367z"
        transform="translate(467.32 297.32)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#fbfbfb"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M.396-.434l-.197.86-.6-.185c.128-.105.256-.209.612-.508.227-.195.174-.113.185-.167z"
        transform="translate(539.78 294.12)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#fefefe"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-.218-.231c.304.014.37.237.436.46-.225-.084-.45-.168-.436-.46z"
        transform="translate(279.47 525.11)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#fcfcfc"
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M4.643 31.681c-.843 7.396-2.305 8.684-9.405 8.394v-80.032c7.136-.68 9.379.79 9.433 7.398.175 21.27.037 42.542-.028 64.24z"
        transform="translate(785.43 840.01)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#e9e9e9"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-.598 16.195c-1.666.245-2.943.387-4.54.566v-33.438c8.002-.517 9.98 1.105 10.157 8.487.131 5.473.195 10.96-.05 16.424-.155 3.468-.505 7.192-5.567 7.96z"
        transform="translate(570.79 863.69)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#e9e9e9"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-2.595 13.746c-1.143-.673-2.477-1.334-2.488-2.018-.143-8.433-.094-16.87-.094-25.242 7.098-.927 9.634.657 10.193 6.99.405 4.59-.033 9.259-.159 13.89-.123 4.53-2.586 6.567-7.452 6.38z"
        transform="translate(570.55 813.68)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#e9e9e9"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-4.08-40.532c1.98-1.164 3.983-2.803 5.542-2.456 1.261.282 2.752 2.92 2.827 4.574.413 9.138.552 18.295.544 27.445-.015 15.646-.192 31.291-.351 46.937-.015 1.477.062 3.266-.701 4.347-.916 1.297-2.703 2.756-4.084 2.728-1.359-.028-3.13-1.575-3.893-2.924-.748-1.321-.59-3.233-.594-4.886-.04-23.479-.05-46.958-.023-70.436.002-1.649.367-3.297.733-5.329z"
        transform="translate(203.62 840.13)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#f4f4f4"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
      <Path
        vectorEffect="non-scaling-stroke"
        d="M-4.847 1.906v-15.37c6.692-.65 9.333 1.371 9.577 7.259.165 3.99.154 8-.007 11.99-.258 6.398-1.95 7.825-9.57 7.794V1.906z"
        transform="translate(656.22 813.61)"
        stroke="none"
        strokeWidth={1}
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeDashoffset={0}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
        fill="#e9e9e9"
        fillOpacity={0}
        fillRule="nonzero"
        opacity={1}
      />
    </Svg>
  );
}

export default SvgComponent;
