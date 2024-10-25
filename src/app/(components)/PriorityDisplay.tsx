import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function PriorityDisplay({ priority }: any) {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          priority > 0 ? "text-red-400" : "text-blue-400"
        }  size-4`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          priority > 1 ? "text-red-400" : "text-blue-400"
        }  size-4`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          priority > 2 ? "text-red-400" : "text-blue-400"
        }  size-4`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          priority > 3 ? "text-red-400" : "text-blue-400"
        }  size-4`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          priority > 4 ? "text-red-400" : "text-blue-400"
        }  size-4`}
      />
    </div>
  );
}
