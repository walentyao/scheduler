<script setup lang="ts">
import CheckboxSwitch from '@/shared/components/CheckboxSwitch.vue';
import { XMarkIcon } from '@heroicons/vue/24/solid';
import CustomButton from '@/shared/components/CustomButton.vue';
</script>

<template>
  <div class="task-detail">
    <header class="header">
      <div class="header__title">
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            class="header__icon"
          >
            <path
              d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
            />
            <path
              d="M10 4C8.81331 4 7.65328 4.35189 6.66658 5.01118C5.67989 5.67047 4.91085 6.60754 4.45673 7.7039C4.0026 8.80026 3.88378 10.0067 4.11529 11.1705C4.3468 12.3344 4.91825 13.4035 5.75736 14.2426C6.59648 15.0818 7.66557 15.6532 8.82946 15.8847C9.99335 16.1162 11.1997 15.9974 12.2961 15.5433C13.3925 15.0891 14.3295 14.3201 14.9888 13.3334C15.6481 12.3467 16 11.1867 16 10C15.9966 8.40975 15.3633 6.88562 14.2389 5.76114C13.1144 4.63667 11.5902 4.00343 10 4ZM10.7216 8.03297C10.1391 7.00293 9.49856 6.00674 8.80324 5.04919C9.11326 4.95435 9.4358 4.90678 9.76 4.90811C9.84865 4.90811 9.94 4.91135 10.0341 4.91784C11.2765 4.91745 12.476 5.37267 13.4054 6.1973C13.3065 6.32865 12.52 7.3454 10.7168 8.03297H10.7216ZM4.98433 8.96703C5.1412 8.18934 5.48203 7.46053 5.97828 6.84155C6.47454 6.22257 7.1118 5.73142 7.83676 5.40919C8.51956 6.3573 9.14918 7.3426 9.7227 8.36054C8.17241 8.74738 6.58207 8.95093 4.98433 8.96703ZM11.573 9.80378C11.5405 9.72108 11.4903 9.62378 11.4578 9.54108C11.3589 9.27838 11.2276 9.05459 11.1141 8.80324C13.0162 8.01676 13.853 6.90108 13.9665 6.76973C14.7056 7.67423 15.1211 8.79981 15.147 9.96757C14.3593 9.81524 13.5591 9.73706 12.7568 9.73405C12.3638 9.73303 11.9712 9.75632 11.5811 9.80378H11.573ZM5.15622 9.85892C6.84487 9.84618 8.52377 9.60173 10.1459 9.13243C10.3081 9.42757 10.4411 9.7227 10.5724 10.0178C10.4989 10.0184 10.4264 10.035 10.36 10.0665C7.72162 10.9178 6.2946 13.2627 6.1973 13.4427C5.34699 12.5035 4.87396 11.2831 4.86919 10.0162V9.85405C4.90973 9.85405 5.00865 9.85405 5.15784 9.85405L5.15622 9.85892ZM12.8524 14.2616C12.6271 13.0179 12.2978 11.7952 11.8681 10.6065C12.2209 10.5494 12.5778 10.5212 12.9351 10.5222C13.6551 10.5246 14.3714 10.625 15.0643 10.8205C14.9452 11.5131 14.6879 12.1746 14.308 12.7658C13.928 13.3569 13.433 13.8656 12.8524 14.2616ZM10 15.1146C8.85875 15.1041 7.75268 14.7183 6.85243 14.0168C6.95135 13.8368 8.00054 11.8357 10.8692 10.8205H10.9016C11.3888 12.0839 11.7564 13.3901 11.9995 14.7222C11.3669 14.9887 10.6863 15.1223 10 15.1146Z"
              fill="white"
            />
          </svg>
        </span>
        <span>UI Design</span>
      </div>
      <div class="header__btn">
        <CustomButton
          type="icon"
          :icon="XMarkIcon"
        >
          <XMarkIcon />
        </CustomButton>
      </div>
    </header>
    <div class="task-info">
      <div class="task-info__date">
        <div class="task-info__dateStart">
          <span>Начало</span>
          <div>21 февраль 2022</div>
        </div>
        <div class="task-info__dateEnd">
          <div>Конец</div>
          <div>3 марта 2022</div>
        </div>
      </div>
      <div class="remaining-time">
        <div class="remaining-time__item">
          <div class="remaining-time__value">0</div>
          <div class="remaining-time__text">месяцев</div>
        </div>
        <div class="remaining-time__item">
          <div class="remaining-time__value">12</div>
          <div class="remaining-time__text">дней</div>
        </div>
        <div class="remaining-time__item">
          <div class="remaining-time__value">18</div>
          <div class="remaining-time__text">часов</div>
        </div>
      </div>
      <div class="description task-info__description">
        <h3>Описание</h3>
        <p>
          user interface (UI) is anything a user may interact with to use a digital product or
          service. This includes everything from screens and touchscreens, keyboards, sounds, and
          even lights. To understand the evolution of UI, however, it’s helpful to learn a bit more
          about its history and how it has evolved into best practices and a profession.
        </p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim facere harum iusto nihil
        nobis sed sunt! A accusamus ad architecto at, atque autem cupiditate distinctio ea eaque
        earum eum eveniet harum iusto magni minus nam neque officia omnis optio perferendis possimus
        quaerat qui quis quo quos recusandae rerum sed sit soluta suscipit tempore tenetur vel
        voluptatibus. Alias asperiores autem culpa dolores earum, esse eum fugiat, id illum impedit
        ipsa iste iure labore laborum natus nisi porro praesentium quidem quos saepe sequi sint
        totam vero! Dolor error eveniet iure, nihil obcaecati omnis tenetur voluptates? Accusamus
        adipisci aliquam aliquid animi aut culpa dolores dolorum ea explicabo facere facilis harum
        id impedit in incidunt iste molestiae nam necessitatibus nihil obcaecati quam quas, quia
        quidem quod sapiente similique sunt, tempore, tenetur unde veniam. At consequuntur doloribus
        fugit ipsa labore non numquam quisquam quos sint velit? Alias architecto consequatur debitis
        eum exercitationem ipsam laboriosam minus, nihil placeat porro qui sint, tenetur.
        Accusantium adipisci culpa cupiditate debitis doloribus earum esse harum hic in incidunt
        itaque laudantium, nam nulla odio porro quaerat quam quia quos ratione repellat repudiandae
        rerum saepe sequi ullam unde vel veniam? Alias animi aperiam atque autem consequuntur
        corporis, culpa, delectus dicta dolores eius eos esse ex explicabo facilis molestiae
        nesciunt nihil nobis numquam obcaecati omnis perspiciatis praesentium quaerat quos ratione
        recusandae reprehenderit sint voluptate. Commodi consequuntur dolorem dolores ea, enim et
        eveniet hic in nobis ratione rem saepe sed voluptatem. Aliquam animi at atque dolores
        ducimus eaque earum facilis impedit nam nulla numquam odio officia praesentium quaerat quas
        quia quidem quod quos sequi sint sunt tempora tempore, ullam vel vero! Accusantium
        asperiores deserunt, facere ipsam nemo neque nisi officiis quaerat ratione soluta! Ab beatae
        distinctio dolor dolorem eligendi est hic ipsum molestiae mollitia nihil recusandae sequi
        tempora ullam unde vel velit, voluptatibus! Beatae cupiditate eum exercitationem. A aliquam
        amet delectus dignissimos distinctio earum enim labore magnam maxime, natus nihil
        perferendis porro quia, quo rem sit suscipit veniam vitae voluptas voluptatem! Accusantium
        alias aut consequatur culpa deleniti dicta eligendi fugit ipsum iure necessitatibus nesciunt
        nihil non omnis perspiciatis placeat porro, possimus quis sint vel voluptate! Deleniti
        dolorem eveniet explicabo, facilis illo minima nam sapiente tempora voluptatibus. Accusamus
        atque autem delectus fugit incidunt inventore ipsum magnam maiores, maxime pariatur
        perferendis perspiciatis provident quas quo voluptatibus? Ea eius eos iure nemo optio
        possimus quae quia saepe tenetur totam. Consectetur hic iusto laudantium minus quod
        recusandae ut voluptas, voluptatum. Aperiam dolorem magnam, molestiae nisi nostrum
        recusandae repellendus sunt vero! Ad, aliquid aspernatur deserunt dicta dolor dolorem
        dolorum esse facilis illum necessitatibus nesciunt optio quam quas, quis, quisquam
        recusandae rem repudiandae temporibus voluptas voluptate! Aperiam aut cum cupiditate,
        deserunt dolor dolore dolorem doloribus earum eius eligendi facilis inventore ipsam laborum,
        minus nemo, officia omnis placeat porro quia quo quod rem sint sit sunt ut vel veniam vero.
        Animi consectetur consequuntur deserunt ducimus eveniet fuga id iste iusto nam neque nihil
        obcaecati sequi sint temporibus unde ut, voluptas. Amet assumenda autem consequatur enim hic
        in libero, quis quod! Ab adipisci, animi autem commodi, deleniti dolorum ducimus ea eius
        expedita fuga illo ipsum itaque iusto laboriosam laborum necessitatibus placeat porro
        quaerat quas quo repudiandae rerum, saepe similique ut vero! Ad doloremque incidunt magni
        sunt totam. Alias est et exercitationem necessitatibus quidem rem reprehenderit sapiente
        sequi suscipit? Ab aliquam aperiam asperiores autem consequatur consequuntur culpa deleniti
        dicta dolorum earum error est eum id ipsam iste iure iusto libero numquam, optio pariatur
        perferendis quaerat quisquam sapiente tempora tempore unde vel. Ad culpa distinctio expedita
        porro possimus quae quo recusandae sunt totam vitae. Cupiditate delectus, dolor dolores
        earum eius et eum eveniet ex expedita incidunt ipsa laboriosam nostrum placeat rem
        repudiandae suscipit tempora vero vitae! Aperiam atque deleniti dolorem dolores doloribus
        dolorum ducimus error est eveniet, excepturi exercitationem hic in iste magnam minus modi
        molestias neque odio perspiciatis quas quia ratione recusandae saepe sapiente sint sunt
        tempore vel velit voluptas voluptatem. Beatae cum fugiat iure iusto maiores minima nulla
        perspiciatis quidem, reiciendis tenetur? Aperiam cum deleniti eos id, nesciunt rem. Ab,
        minus quidem. Amet aut blanditiis deleniti dignissimos earum ex facilis illum in incidunt
        iure laboriosam laudantium maxime modi molestias natus optio, quae quam quibusdam quod saepe
        sunt suscipit veniam. A accusamus adipisci corporis debitis deleniti ea eius et eum
        exercitationem inventore ipsum iste labore laboriosam maiores molestias mollitia obcaecati
        odio perferendis quae quaerat quas, quasi quos ratione reiciendis rerum sint tempora tenetur
        totam unde voluptatibus. Animi cum iste itaque molestiae nesciunt nostrum sequi tempore.
        Adipisci at, atque commodi culpa dolorum eaque eius eos error eveniet ex facere facilis id
        libero maxime minus nisi non odio officia possimus quaerat ratione reprehenderit repudiandae
        suscipit tempora ullam velit veniam voluptatem. Ab aliquid autem corporis cumque
        dignissimos, dolores ducimus excepturi fugiat hic id illo labore minima nobis odit officiis
        optio quisquam quo tempora unde ut vel, velit voluptate! Ab doloribus mollitia
        reprehenderit! Dolores excepturi ipsam itaque quos. Accusamus, aspernatur cum debitis
        dolores eaque labore laudantium maiores modi nam natus necessitatibus obcaecati quas quasi
        quibusdam quidem quo, rerum sint velit vitae voluptates? Asperiores et explicabo facere non,
        sunt vel vero voluptas voluptate! Ad amet debitis dolorum excepturi, minus veniam! Deserunt
        distinctio ex illo ipsam nemo similique veniam voluptatum. Accusamus alias amet architecto
        aspernatur assumenda atque beatae culpa, cum dignissimos dolore dolorum error eum facilis
        fuga illo in ipsa iure minus modi mollitia nemo nobis odio officia officiis optio quibusdam
        quidem, repellendus repudiandae soluta tempore unde veritatis voluptas voluptatum! Aperiam
        architecto autem consequuntur culpa doloribus earum id, iste nesciunt obcaecati, odio qui
        saepe tempora vero voluptate voluptatem. Alias aperiam dicta illum iusto obcaecati officia
        pariatur praesentium quae sit ullam. Amet consequuntur, doloribus exercitationem hic libero
        nemo quas ratione similique veritatis voluptatibus! At commodi culpa deserunt magnam nobis
        odio odit officiis quam. Dignissimos, molestias mollitia nulla possimus quos unde. Debitis
        dignissimos dolore excepturi fugiat itaque libero, molestiae neque nesciunt nulla possimus
        quasi sed suscipit tempora ullam voluptatem voluptates voluptatum. A beatae blanditiis
        consectetur deleniti deserunt dolore eum impedit inventore magni minima nam natus nisi
        perspiciatis, provident repellat vel voluptatibus!
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar">
        <div class="progress-bar__line"></div>
      </div>
      <div class="progress__value">80%</div>
    </div>
    <div class="todo-list__wrapper">
      <h3>Список подзадач</h3>
      <div class="todo-list">
        <div class="list-item">
          <div class="list-item__title">Work Out</div>
          <CheckboxSwitch id="saadsd" />
        </div>
        <div class="list-item">
          <div class="list-item__title">Daily Meeting</div>
          <CheckboxSwitch id="saasddsd" />
        </div>
        <div class="list-item">
          <div class="list-item__title">Reading a Book</div>
          <CheckboxSwitch id="saddsd" />
        </div>
        <div class="list-item">
          <div class="list-item__title">Daily Meeting</div>
          <CheckboxSwitch id="saaasd" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.task-detail {
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  max-width: 375px;
}

.progress {
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  font-size: 12px;

  &__title {
    color: white;
  }

  &__value {
    display: flex;
    justify-content: flex-end;
  }
}

.progress-bar {
  height: 4px;
  border-radius: 4px;
  background: #004797;

  &__line {
    height: 4px;
    border-radius: 4px;
    width: 80%;
    background: white;
  }
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &__title {
    font-size: 36px;
    color: var(--color-blue);
    font-weight: 800;
  }

  &__icon {
    fill: var(--color-blue);
    width: 30px;
    height: 30px;
  }
}

.task-info {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  &__date {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-size: 13px;
  }
}

.remaining-time {
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 10px;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 20px;
    background: var(--color-blue);
    color: white;

    width: 100px;
    height: 100px;
  }

  &__value {
    font-size: 28px;
    font-weight: 700;
  }
}
</style>
