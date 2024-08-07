import Image from "next/image";
import styles from "../styles/Hero.module.css";
import "../styles/global.css";

const Hero: React.FC = () => {
  return (
    <div className={`${styles.section} ${styles.hero} ${styles.home_hero}`}>
      <div className={`${styles.container_default} ${styles.w_container}`}>
        <div
          className={`${styles.w_layout_grid} ${styles.grid_2_columns} ${styles.home_grid_2_cols}`}
        >
          <div className={styles.trans}>
            <div className={styles.mg_bottom_20px}>
              <div className={styles.display_flex_children_wrap}>
                <div className={`${styles.flex_horizontal} ${styles.start}`}>
                  <h1
                    className={`${styles.display_1} ${styles.mg_bottom_0} ${styles.heading1}`}
                  >
                    Welcome
                  </h1>
                  <img
                    src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/63dd8ddf4940a673b6bef8b3_stars-cloudly-x-webflow-templates.png"
                    alt=""
                    className={styles.icon_inside_header}
                  />
                </div>
                <div className={`${styles.flex_horizontal} ${styles.start}`}>
                  <h1
                    className={`${styles.display_1} ${styles.mg_bottom_0} ${styles.heading1}`}
                  >
                    to Flicky
                  </h1>
                  <img
                    src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/6407b5dd316ad9d83b86f1d1_smartphone-cloudly-x-webflow-template.png"
                    alt=""
                    className={`${styles.icon_inside_header} ${styles.fit_contain}`}
                  />
                  <div
                    className={`${styles.display_1} ${styles.mg_bottom_0} ${styles.heading1}`}
                  >
                    app
                  </div>
                </div>
              </div>
              <div className={styles.mg_bottom_40px}>
                <div className={styles.inner_container}>
                  <p className={styles.mg_bottom_0}>
                    Flicky is your go-to app for watching, sharing, and
                    discovering short, engaging videos. Whether you’re into
                    comedy, music, DIY, travel, or daily vlogs, Flicky has
                    something for everyone.
                  </p>
                </div>
              </div>
              <div
                className={styles.button_row_flex}
              >
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  className={`${styles.btn_secondary} ${styles.flex} ${styles.w_inline_block}`}
                >
                  <img
                    src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/63dc2370e06cc294c742a835_apple-logo-cloudly-x-webflow-templates.svg"
                    alt=""
                  />
                  <div>Download for iOS</div>
                </a>
                <a
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  className={`${styles.btn_secondary} ${styles.flex} ${styles.w_inline_block}`}
                >
                  <img
                    src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/63dc2394682caac78259a1c5_android-logo-cloudly-x-webflow-templates.svg"
                    alt=""
                  />
                  <div>Download for Android</div>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.z_index_1}>
            <img
              src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/63e2dd7e107e72495c943acf_smartphone-home-cloudly-x-webflow-template.png"
              sizes="(max-width: 479px) 100vw, (max-width: 991px) 76vw, (max-width: 1439px) 32vw, 450.046875px"
              alt=""
              className={`${styles.image_size} ${styles.smartphone} ${styles.z_index_1} ${styles.smart_trans}`}
            />
            <div className={styles.shape_wrapper}>
              <img
                src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/63e2df52107e7239949451c3_smile-face-with-sunglasses-cloudly-x-webflow-template.png"
                alt=""
                className={`${styles.emoji_with_sunglasses} ${styles.shape} ${styles.smart_trans}`}
              />
              <img
                src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/63e2e10667358d7c2f4bb23e_laughing-a-lot-face-cloudly-x-webflow-template.png"
                alt=""
                className={`${styles.emoji_laughing_a_lot} ${styles.shape} ${styles.smart_trans}`}
              />
              <img
                src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/63e2e1d9513de13664209d82_smilling-face-with-hearth-cloudly-x-webflow-template.png"
                alt=""
                className={`${styles.emoji_heart_eyes} ${styles.shape} ${styles.smart_trans}`}
              />
              <img
                src="https://assets-global.website-files.com/63dbcee746674134a00f2de6/63e2e263d05c8e665fd087d5_big-smile-face-cloudly-x-webflow-template.png"
                alt=""
                className={`${styles.emoji_big_smile} ${styles.shape} ${styles.smart_trans}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
